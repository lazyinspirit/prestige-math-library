// Exact finite grid counts. No external homology package is called.
#include <algorithm>
#include <array>
#include <cassert>
#include <cstdint>
#include <deque>
#include <fstream>
#include <iostream>
#include <map>
#include <set>
#include <string>
#include <unordered_map>
#include <vector>
#include <sys/resource.h>
using namespace std;using U=uint32_t;using L=uint64_t;
const U NIL=UINT32_MAX;const L AS_LIMIT=6ULL<<30;
void cap(){rlimit r{AS_LIMIT,AS_LIMIT};if(setrlimit(RLIMIT_AS,&r))throw runtime_error("address-space cap failed");}
template<class T>void put(ofstream&f,T x){f.write((char*)&x,sizeof x);}
template<class T>T get(ifstream&f){T x;f.read((char*)&x,sizeof x);if(!f)throw runtime_error("short checkpoint");return x;}
int main(int argc,char**argv){cap();if(argc<3)throw runtime_error("usage input.txt outputprefix [count|reduce]");string input=argv[1],pre=argv[2],mode=argc>3?argv[3]:"count";vector<L>codes;vector<int8_t>M;vector<U>off,edges;int n;
if(mode=="count"){
 ifstream in(input);in>>n;assert(n>=2&&n<=15);vector<int>O(n),X(n);for(int&i:O)in>>i;for(int&i:X)in>>i;assert(in);set<int>a(O.begin(),O.end()),b(X.begin(),X.end());assert(a.size()==n&&b.size()==n);for(int r=0;r<n;r++)assert(O[r]!=X[r]);
 int oo=0,xx=0;for(int i=0;i<n;i++)for(int j=i+1;j<n;j++){oo+=O[i]<O[j];xx+=X[i]<X[j];}
 vector<vector<int>>W(n,vector<int>(n));for(int r=0;r<n;r++)for(int c=0;c<n;c++)for(int k=0;k<n;k++)W[r][c]+=(k>=r?int(c<=X[k])-int(c<=O[k]):int(X[k]<c)-int(O[k]<c));
 U full=(1U<<n)-1;vector<int>lo(full+1,9999),hi(full+1,-9999);lo[full]=hi[full]=0;
 for(int mask=(int)full-1;mask>=0;mask--){int r=__builtin_popcount((U)mask);for(int c=0;c<n;c++)if(!(mask>>c&1)){lo[mask]=min(lo[mask],W[r][c]+lo[mask|(1<<c)]);hi[mask]=max(hi[mask],W[r][c]+hi[mask|(1<<c)]);}}
 int constant=oo-xx-n+1,target=2-constant;cerr<<"n="<<n<<" A2-range="<<constant+lo[0]<<","<<constant+hi[0]<<"\n";assert(constant+hi[0]==2); // This run counts the actual highest chain Alexander slice.
 vector<int>p(n);auto rec=[&](auto&&self,U mask,int sum,L code)->void{if(target-sum<lo[mask]||target-sum>hi[mask])return;if(mask==full){int m=oo+1;for(int r=0;r<n;r++){for(int s=r+1;s<n;s++)m+=p[r]<p[s];for(int k=r;k<n;k++)m-=p[r]<=O[k];for(int k=0;k<r;k++)m-=O[k]<p[r];}assert(m>=-127&&m<128);codes.push_back(code);M.push_back(m);return;}int r=__builtin_popcount(mask);for(int c=0;c<n;c++)if(!(mask>>c&1)){p[r]=c;self(self,mask|(1U<<c),sum+W[r][c],code|((L)c<<(4*r)));}};rec(rec,0,0,0);U N=codes.size();cerr<<"states="<<N<<"\n";assert(N==1939538);
 {ofstream f(pre+".states",ios::binary);put(f,(U)n);put(f,N);f.write((char*)codes.data(),N*sizeof(L));f.write((char*)M.data(),N);assert(f);}
 unordered_map<L,U>idx;idx.reserve(N*1.3);for(U i=0;i<N;i++)assert(idx.emplace(codes[i],i).second);
 struct Rect{U rows,cols;};vector<Rect>rs(n*n*n*n,{0,0});auto at=[&](int r,int s,int a,int b){return ((r*n+s)*n+a)*n+b;};
 for(int r=0;r<n;r++)for(int s=0;s<n;s++)if(r!=s)for(int a=0;a<n;a++)for(int b=0;b<n;b++)if(a!=b){int h=(s-r+n)%n,w=(b-a+n)%n;bool ok=true;for(int k=0;k<n;k++)if((k-r+n)%n<h&&(((O[k]-a+n)%n<w)||((X[k]-a+n)%n<w))){ok=false;break;}if(!ok)continue;U rm=0,cm=0;for(int k=0;k<n;k++){int d=(k-r+n)%n;if(d>0&&d<h)rm|=1U<<k;d=(k-a+n)%n;if(d>0&&d<w)cm|=1U<<k;}rs[at(r,s,a,b)]={rm,cm|(1U<<31)};}
 off.reserve(N+1);off.push_back(0);L orbits=0;ofstream cf(pre+".matrix",ios::binary);put(cf,N);vector<U>col;
 for(U i=0;i<N;i++){L code=codes[i];for(int r=0;r<n;r++)p[r]=(code>>(4*r))&15;col.clear();for(int r=0;r<n;r++)for(int s=0;s<n;s++)if(r!=s){Rect z=rs[at(r,s,p[r],p[s])];if(!(z.cols>>31))continue;bool ok=true;U rm=z.rows;while(rm){int k=__builtin_ctz(rm);rm&=rm-1;if(z.cols>>p[k]&1U){ok=false;break;}}if(!ok)continue;L q=code^((L)(p[r]^p[s])<<(4*r))^((L)(p[r]^p[s])<<(4*s));auto it=idx.find(q);assert(it!=idx.end());U j=it->second;assert(M[i]==M[j]+1);orbits++;col.push_back(j);}
 sort(col.begin(),col.end());vector<U>out;for(size_t k=0;k<col.size();){size_t j=k+1;while(j<col.size()&&col[j]==col[k])j++;if((j-k)%2)out.push_back(col[k]);k=j;}put(cf,(U)out.size());cf.write((char*)out.data(),out.size()*sizeof(U));edges.insert(edges.end(),out.begin(),out.end());off.push_back(edges.size());if(i%100000==0){cf.flush();cerr<<"matrix "<<i<<" edges "<<edges.size()<<"\n";}}
 cf.close();{ofstream f(pre+".counts.json");map<int,L>dims;for(int m:M)dims[m]++;f<<"{\"n\":"<<n<<",\"state_count\":"<<N<<",\"rectangle_orbits\":"<<orbits<<",\"matrix_edges\":"<<edges.size()<<",\"Amax\":1,\"chain_dimensions\":{";bool first=true;for(auto [m,d]:dims){if(!first)f<<",";first=false;f<<"\""<<m<<"\":"<<d;}f<<"}}\n";}
 // Independently compose literal columns; no appeal to a supplier's square-zero theorem.
 vector<U>stamp(N,0);vector<unsigned char>par(N,0);vector<U>touched;for(U i=0;i<N;i++){touched.clear();for(U k=off[i];k<off[i+1];k++){U j=edges[k];for(U l=off[j];l<off[j+1];l++){U v=edges[l];if(stamp[v]!=i+1){stamp[v]=i+1;par[v]=0;touched.push_back(v);}par[v]^=1;}}for(U v:touched)assert(par[v]==0);}cerr<<"literal square-zero PASS\n";{ofstream f(pre+".square-zero");f<<"PASS all "<<N<<" literal matrix columns\n";}
 return 0;
}
// Load the immutable count checkpoint for sparse finite chain elimination.
{ifstream f(pre+".states",ios::binary);n=get<U>(f);U N=get<U>(f);codes.resize(N);M.resize(N);f.read((char*)codes.data(),N*sizeof(L));f.read((char*)M.data(),N);assert(f);}
U N=codes.size();vector<vector<U>>D(N),R(N);vector<U>deg(N,0),stamp(N,0);L liveedges=0,allocatedreverse=0;{ifstream f(pre+".matrix",ios::binary);assert(get<U>(f)==N);for(U i=0;i<N;i++){U k=get<U>(f);D[i].resize(k);f.read((char*)D[i].data(),k*sizeof(U));assert(f);for(U j:D[i]){R[j].push_back(i);deg[j]++;}liveedges+=k;}}allocatedreverse=liveedges;
vector<unsigned char>active(N,1);deque<pair<U,U>>Q;U scanmark=0;auto valid=[&](U a,U b){return active[a]&&active[b]&&binary_search(D[a].begin(),D[a].end(),b);};auto incoming=[&](U b){vector<U>v;scanmark++;for(U a:R[b])if(stamp[a]!=scanmark&&valid(a,b)){stamp[a]=scanmark;v.push_back(a);}assert(v.size()==deg[b]);return v;};
for(U i=0;i<N;i++)if(D[i].size()==1)Q.emplace_back(i,D[i][0]);for(U b=0;b<N;b++)if(deg[b]==1){auto v=incoming(b);Q.emplace_back(v[0],b);}
vector<U>changed;auto alter=[&](U a,vector<U>&nw){const vector<U>&old=D[a];size_t i=0,j=0;while(i<old.size()||j<nw.size()){if(j==nw.size()||(i<old.size()&&old[i]<nw[j])){U b=old[i++];liveedges--;if(active[b]){assert(deg[b]);deg[b]--;changed.push_back(b);}}else if(i==old.size()||nw[j]<old[i]){U b=nw[j++];liveedges++;if(active[b]){deg[b]++;R[b].push_back(a);allocatedreverse++;changed.push_back(b);}}else{i++;j++;}}D[a].swap(nw);if(active[a]&&D[a].size()==1)Q.emplace_back(a,D[a][0]);};
ofstream tr(pre+".elimination",ios::binary);put(tr,N);map<int,L>pairs;L done=0,maxlive=liveedges,maxcost=0;
while(true){U a=NIL,b=NIL;while(!Q.empty()){auto e=Q.front();Q.pop_front();if(valid(e.first,e.second)&&(D[e.first].size()==1||deg[e.second]==1)){a=e.first;b=e.second;break;}}if(a==NIL){L cost=UINT64_MAX;for(U x=0;x<N;x++)if(active[x])for(U y:D[x]){L c=(D[x].size()-1ULL)*(deg[y]-1ULL);if(c<cost){cost=c;a=x;b=y;}}if(a==NIL)break;maxcost=max(maxcost,cost);cerr<<"nonunit pivot after "<<done<<" cost "<<cost<<"\n";}
 assert(valid(a,b));assert(M[a]==M[b]+1);vector<U>da=D[a],ib=incoming(b),ia=incoming(a);active[a]=active[b]=0;changed.clear();for(U c:ib)if(active[c]){vector<U>nw;set_symmetric_difference(D[c].begin(),D[c].end(),da.begin(),da.end(),back_inserter(nw));nw.erase(remove_if(nw.begin(),nw.end(),[&](U v){return !active[v];}),nw.end());alter(c,nw);}for(U c:ia)if(active[c]){vector<U>nw=D[c];auto it=lower_bound(nw.begin(),nw.end(),a);if(it!=nw.end()&&*it==a)nw.erase(it);alter(c,nw);}vector<U>empty;alter(a,empty);empty.clear();alter(b,empty);deg[a]=deg[b]=0;for(U y:changed)if(active[y]&&deg[y]==1){auto v=incoming(y);Q.emplace_back(v[0],y);}put(tr,a);put(tr,b);pairs[M[a]]++;done++;maxlive=max(maxlive,liveedges);if(done%10000==0){tr.flush();cerr<<"cancel "<<done<<" live "<<N-2*done<<" edges "<<liveedges<<" reverse "<<allocatedreverse<<" queue "<<Q.size()<<"\n";}if(liveedges>50000000ULL||allocatedreverse>150000000ULL)throw runtime_error("sparse fill budget exceeded; count checkpoint and finite prefix retained");}
tr.close();map<int,L>betti;vector<U>survivors;for(U i=0;i<N;i++)if(active[i]){assert(D[i].empty());betti[M[i]]++;survivors.push_back(i);}L even=0,odd=0;for(auto [m,d]:betti)(m%2?odd:even)+=d;
ofstream out(pre+".homology.json");out<<"{\"state_count\":"<<N<<",\"cancelled_pairs\":"<<done<<",\"maximum_live_edges\":"<<maxlive<<",\"maximum_nonunit_cost\":"<<maxcost<<",\"even_rank\":"<<even<<",\"odd_rank\":"<<odd<<",\"homology_dimensions\":{";bool first=true;for(auto [m,d]:betti){if(!first)out<<",";first=false;out<<"\""<<m<<"\":"<<d;}out<<"},\"cancelled_by_source_M\":{";first=true;for(auto [m,d]:pairs){if(!first)out<<",";first=false;out<<"\""<<m<<"\":"<<d;}out<<"},\"survivors\":[";first=true;for(U i:survivors){if(!first)out<<",";first=false;out<<i;}out<<"]}\n";cerr<<"COMPLETE even="<<even<<" odd="<<odd<<" pairs="<<done<<"\n";
}
