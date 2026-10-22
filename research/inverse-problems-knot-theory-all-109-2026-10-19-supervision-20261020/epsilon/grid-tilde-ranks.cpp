// Exact new-grid tilde differential ranks over F2. No numerical arithmetic.
// Input n O[0..n-1] X[0..n-1], checkpoint prefix.
#include <algorithm>
#include <array>
#include <cassert>
#include <cstdint>
#include <cstdio>
#include <fstream>
#include <iostream>
#include <map>
#include <string>
#include <sys/resource.h>
#include <vector>
using namespace std;
using U=uint32_t;using Grade=pair<int,int>;
int n; vector<int> O,X,p; vector<U> fact;
U rankperm(const vector<int>& a){U r=0;unsigned mask=0;for(int i=0;i<n;i++){unsigned below=(1u<<a[i])-1;r+=(a[i]-__builtin_popcount(mask&below))*fact[n-1-i];mask|=1u<<a[i];}return r;}
int invpairs(const vector<int>& a){int s=0;for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)s+=a[i]<a[j];return s;}
int maslov(const vector<int>& a,const vector<int>& marks,int ii){int cross=0;for(int i=0;i<n;i++)for(int j=0;j<n;j++)cross+=(i<=j&&a[i]<=marks[j])+(j<i&&marks[j]<a[i]);return invpairs(a)+ii-cross+1;}
void xor_sorted(vector<U>& a,const vector<U>& b){vector<U> out;out.reserve(a.size()+b.size());set_symmetric_difference(a.begin(),a.end(),b.begin(),b.end(),back_inserter(out));a.swap(out);}
vector<vector<U>> piv;map<Grade,uint64_t> basis_count,rankby;U processed=0;
void putu(ofstream& f,U x){f.write((char*)&x,4);} U getu(ifstream& f){U x;f.read((char*)&x,4);return x;}
void checkpoint(const string& pref){string temp=pref+".checkpoint.tmp",dest=pref+".checkpoint.bin";ofstream f(temp,ios::binary);putu(f,0x47524631);putu(f,n);putu(f,processed);for(int v:O)putu(f,v);for(int v:X)putu(f,v);for(int v:p)putu(f,v);putu(f,basis_count.size());for(auto [g,v]:basis_count){putu(f,g.first+1000);putu(f,g.second+1000);putu(f,v);}putu(f,rankby.size());for(auto [g,v]:rankby){putu(f,g.first+1000);putu(f,g.second+1000);putu(f,v);}for(auto& a:piv){putu(f,a.size());if(!a.empty())f.write((char*)a.data(),4*a.size());}f.close();if(!f)throw runtime_error("checkpoint write failure");if(rename(temp.c_str(),dest.c_str()))throw runtime_error("checkpoint rename failure");}
bool restore(const string& pref){ifstream f(pref+".checkpoint.bin",ios::binary);if(!f)return false;assert(getu(f)==0x47524631);assert(getu(f)==(U)n);processed=getu(f);for(int v:O)assert(getu(f)==(U)v);for(int v:X)assert(getu(f)==(U)v);for(int& v:p)v=getu(f);U size=getu(f);for(U k=0;k<size;k++){int m=(int)getu(f)-1000,a=(int)getu(f)-1000;basis_count[{m,a}]=getu(f);}size=getu(f);for(U k=0;k<size;k++){int m=(int)getu(f)-1000,a=(int)getu(f)-1000;rankby[{m,a}]=getu(f);}for(auto& a:piv){U z=getu(f);a.resize(z);if(z)f.read((char*)a.data(),4*z);}assert(f);return true;}
int main(int argc,char**argv){rlimit lim{6ULL<<30,6ULL<<30};setrlimit(RLIMIT_AS,&lim);assert(argc==3);ifstream input(argv[1]);input>>n;assert(n>=2&&n<=10);O.resize(n);X.resize(n);for(int&v:O)input>>v;for(int&v:X)input>>v;assert(input);p.resize(n);for(int i=0;i<n;i++)p[i]=i;fact.assign(n+1,1);for(int i=1;i<=n;i++)fact[i]=i*fact[i-1];piv.resize(fact[n]);int io=invpairs(O),ix=invpairs(X);string pref=argv[2];restore(pref);
 // Four-index lookup: marking-free cell rectangles and strict interior masks.
 struct Rect{bool good=false;unsigned rows=0,cols=0;};vector<Rect> rect(n*n*n*n);auto at=[&](int a,int b,int c,int d)->Rect&{return rect[((a*n+b)*n+c)*n+d];};
 for(int a=0;a<n;a++)for(int b=0;b<n;b++)if(a!=b)for(int c=0;c<n;c++)for(int d=0;d<n;d++)if(c!=d){auto&r=at(a,b,c,d);r.good=true;unsigned rowcells=0,colcells=0;for(int k=a;k!=b;k=(k+1)%n)rowcells|=1u<<k;for(int k=c;k!=d;k=(k+1)%n)colcells|=1u<<k;for(int k=(a+1)%n;k!=b;k=(k+1)%n)r.rows|=1u<<k;for(int k=(c+1)%n;k!=d;k=(k+1)%n)r.cols|=1u<<k;for(int k=0;k<n;k++)if((rowcells>>k)&1)if(((colcells>>O[k])&1)||((colcells>>X[k])&1))r.good=false;}
 cerr<<"start n="<<n<<" states="<<fact[n]<<" resumed="<<processed<<"\n";
 try {while(processed<fact[n]){int mo=maslov(p,O,io),mx=maslov(p,X,ix);assert((mo-mx-(n-1))%2==0);int A=(mo-mx-(n-1))/2;Grade g{mo,A};basis_count[g]++;vector<U> col;
 for(int a=0;a<n;a++)for(int b=0;b<n;b++)if(a!=b){auto&r=at(a,b,p[a],p[b]);if(!r.good)continue;bool empty=true;for(int k=0;k<n;k++)if(((r.rows>>k)&1)&&((r.cols>>p[k])&1)){empty=false;break;}if(!empty)continue;swap(p[a],p[b]);U target=rankperm(p);swap(p[a],p[b]);col.push_back(target);}
 sort(col.begin(),col.end());vector<U> parity;for(size_t k=0;k<col.size();){size_t j=k+1;while(j<col.size()&&col[j]==col[k])j++;if((j-k)%2)parity.push_back(col[k]);k=j;}col.swap(parity);
 while(!col.empty()){U q=col.back();if(piv[q].empty()){piv[q]=move(col);rankby[g]++;break;}xor_sorted(col,piv[q]);}
 processed++;if(processed<fact[n])assert(next_permutation(p.begin(),p.end()));
 if(processed%250000==0){checkpoint(pref);struct rusage ru;getrusage(RUSAGE_SELF,&ru);uint64_t nz=0;for(auto&a:piv)nz+=a.size();cerr<<"checkpoint "<<processed<<" piv_nz="<<nz<<" maxrss_kib="<<ru.ru_maxrss<<"\n";}
 }}catch(const bad_alloc&){checkpoint(pref);cerr<<"MEMORY HOLD at "<<processed<<"\n";return 3;}
 checkpoint(pref);ofstream out(pref+".result.json");out<<"{\n\"n\":"<<n<<",\"states\":"<<fact[n]<<",\"completed\":"<<processed<<",\"homology\":[\n";bool first=true;for(auto[g,c]:basis_count){auto [m,a]=g;uint64_t r0=rankby[g],r1=rankby[{m+1,a}];assert(c>=r0+r1);if(c==r0+r1)continue;if(!first)out<<",\n";first=false;out<<"{\"M\":"<<m<<",\"A\":"<<a<<",\"basis\":"<<c<<",\"rank_out\":"<<r0<<",\"rank_in\":"<<r1<<",\"dimension\":"<<(c-r0-r1)<<"}";}out<<"\n]}\n";cerr<<"complete "<<processed<<"\n";
}
