// Separate verifier of NEW finite count and chain-cancellation certificate.
#include <algorithm>
#include <bitset>
#include <cassert>
#include <cstdint>
#include <fstream>
#include <iostream>
#include <map>
#include <string>
#include <vector>
#include <sys/resource.h>
using namespace std;using U=uint32_t;using L=uint64_t;template<class T>T rd(ifstream&f){T x;f.read((char*)&x,sizeof x);assert(f);return x;}
int main(int argc,char**argv){rlimit cap{6ULL<<30,6ULL<<30};assert(!setrlimit(RLIMIT_AS,&cap));assert(argc==3);string pre=argv[2];ifstream in(argv[1]);int n;in>>n;assert(n==13);vector<int>O(n),X(n);for(int&i:O)in>>i;for(int&i:X)in>>i;assert(in);ifstream st(pre+".states",ios::binary);assert(rd<U>(st)==(U)n);U N=rd<U>(st);vector<L>S(N);vector<int8_t>M(N);st.read((char*)S.data(),8ULL*N);st.read((char*)M.data(),N);assert(st);
 auto marksI=[&](vector<int>&p){int ans=0;for(int r=0;r<n;r++)for(int s=0;s<n;s++)ans+=r<s&&p[r]<p[s];return ans;};int oo=marksI(O),xx=marksI(X);vector<vector<int>>w(n,vector<int>(n));for(int r=0;r<n;r++)for(int c=0;c<n;c++)for(int k=0;k<n;k++){w[r][c]+=int(c<X[k]+0.5&&r<k+0.5)+int(X[k]+0.5<c&&k+0.5<r)-int(c<O[k]+0.5&&r<k+0.5)-int(O[k]+0.5<c&&k+0.5<r);}
 // Forward polynomial permanent independently counts every permutation in every A slice.
 vector<map<int,L>>P(1U<<n);P[0][0]=1;for(U mask=0;mask<(1U<<n);mask++){int r=__builtin_popcount(mask);if(r==n)break;for(auto [v,m]:P[mask])for(int c=0;c<n;c++)if(!(mask>>c&1))P[mask|(1U<<c)][v+w[r][c]]+=m;}
 auto poly=P.back();assert(poly.rbegin()->first+oo-xx-n+1==2);assert(poly[2-oo+xx+n-1]==N);vector<int>prev,p(n);for(U i=0;i<N;i++){U mask=0;int a=oo-xx-n+1,m=oo+1;for(int r=0;r<n;r++){p[r]=(S[i]>>(4*r))&15;assert(p[r]<n&&!(mask>>p[r]&1));mask|=1U<<p[r];a+=w[r][p[r]];}assert(a==2);if(i)assert(prev<p);prev=p;for(int r=0;r<n;r++){for(int s=0;s<n;s++)m+=r<s&&p[r]<p[s];for(int k=0;k<n;k++)m-=int(p[r]<O[k]+0.5&&r<k+0.5)+int(O[k]+0.5<p[r]&&k+0.5<r);}assert(m==M[i]);}
 cerr<<"complete state inventory + absolute J gradings PASS\n";
 vector<U>off(N+1),E,deg(N),outdeg(N),roff(N+1);ifstream mat(pre+".matrix",ios::binary);assert(rd<U>(mat)==N);for(U i=0;i<N;i++){U z=rd<U>(mat);outdeg[i]=z;for(U j=0;j<z;j++){U t=rd<U>(mat);assert(t<N&&M[i]==M[t]+1);E.push_back(t);deg[t]++;}off[i+1]=E.size();assert(is_sorted(E.begin()+off[i],E.end()));}char extra;assert(!mat.get(extra));
 // Reconstruct literal rectangles with coordinate interval inequalities, not stored masks.
 auto between=[&](int q,int a,int b){return (q-a+n)%n>0&&(q-a+n)%n<(b-a+n)%n;};auto lexkey=[&](L code){L ans=0;for(int r=0;r<n;r++)ans=(ans<<4)|((code>>(4*r))&15);return ans;};vector<L>keys(N);for(U i=0;i<N;i++)keys[i]=lexkey(S[i]);assert(is_sorted(keys.begin(),keys.end()));L orbits=0;
 for(U i=0;i<N;i++){for(int r=0;r<n;r++)p[r]=(S[i]>>(4*r))&15;vector<U>v;for(int r=0;r<n;r++)for(int s=0;s<n;s++)if(r!=s){int a=p[r],b=p[s],height=(s-r+n)%n,width=(b-a+n)%n;bool empty=true;for(int k=0;k<n;k++)if((k-r+n)%n<height&&(((O[k]-a+n)%n<width)||((X[k]-a+n)%n<width))){empty=false;break;}if(!empty)continue;for(int k=0;k<n;k++)if(between(k,r,s)&&between(p[k],a,b)){empty=false;break;}if(!empty)continue;L q=S[i]^((L)(a^b)<<(4*r))^((L)(a^b)<<(4*s));L key=lexkey(q);auto it=lower_bound(keys.begin(),keys.end(),key);assert(it!=keys.end()&&*it==key);v.push_back(it-keys.begin());orbits++;}sort(v.begin(),v.end());vector<U>odd;for(size_t k=0;k<v.size();){size_t j=k+1;while(j<v.size()&&v[j]==v[k])j++;if((j-k)%2)odd.push_back(v[k]);k=j;}assert(odd.size()==off[i+1]-off[i]);assert(equal(odd.begin(),odd.end(),E.begin()+off[i]));}
 cerr<<"all literal rectangle coefficients PASS; orbits="<<orbits<<" edges="<<E.size()<<"\n";
 for(U i=0;i<N;i++)roff[i+1]=roff[i]+deg[i];vector<U>RE(E.size()),cur=roff;for(U i=0;i<N;i++)for(U k=off[i];k<off[i+1];k++)RE[cur[E[k]]++]=i;vector<unsigned char>live(N,1);ifstream tr(pre+".elimination",ios::binary);assert(rd<U>(tr)==N);U pairs=0;vector<pair<U,U>>tail;while(tr.peek()!=EOF){U a=rd<U>(tr),b=rd<U>(tr);assert(a<N&&b<N&&live[a]&&live[b]&&M[a]==M[b]+1);assert(binary_search(E.begin()+off[a],E.begin()+off[a+1],b));if(outdeg[a]!=1&&deg[b]!=1){tail.emplace_back(a,b);break;}live[a]=live[b]=0;for(U x:{a,b}){for(U k=off[x];k<off[x+1];k++)if(live[E[k]]){assert(deg[E[k]]);deg[E[k]]--;}for(U k=roff[x];k<roff[x+1];k++)if(live[RE[k]]){assert(outdeg[RE[k]]);outdeg[RE[k]]--;}}pairs++;}
 vector<U>remain;vector<int>local(N,-1);for(U i=0;i<N;i++)if(live[i]){local[i]=remain.size();remain.push_back(i);}assert(remain.size()<=1024);U K=remain.size();cerr<<"independent free-chain prefix PASS pairs="<<pairs<<" residual="<<K<<"\n";vector<bitset<1024>>D(K);for(U k=0;k<K;k++){U i=remain[k];for(U l=off[i];l<off[i+1];l++)if(live[E[l]])D[k].set(local[E[l]]);}
 // Independently compute ranks in the small residual before reading non-free trace.
 map<int,U>dims,ranks;for(U i:remain)dims[M[i]]++;for(auto [m,ct]:dims){vector<bitset<1024>>basis(K);U rank=0;for(U a=0;a<K;a++)if(M[remain[a]]==m){auto v=D[a];for(int b=K-1;b>=0;b--)if(v[b]){if(basis[b].any())v^=basis[b];else{basis[b]=v;rank++;break;}}}ranks[m]=rank;}map<int,int>H;for(auto [m,d]:dims){int h=d-ranks[m]-ranks[m+1];assert(h>=0);if(h)H[m]=h;}assert(H.size()==2&&H[-1]==2&&H[0]==2);
 // Replay serialized pairs with explicitly sequenced reads.
 tr.clear();tr.seekg(sizeof(U)+8ULL*pairs);tail.clear();while(tr.peek()!=EOF){U a=rd<U>(tr);U b=rd<U>(tr);tail.emplace_back(a,b);}
 for(auto [ga,gb]:tail){assert(live[ga]&&live[gb]);U a=local[ga],b=local[gb];assert(a<K&&b<K&&D[a][b]);auto da=D[a];for(U c=0;c<K;c++)if(live[remain[c]]&&c!=a&&c!=b){if(D[c][b])D[c]^=da;D[c].reset(a);D[c].reset(b);}live[ga]=live[gb]=0;D[a].reset();D[b].reset();pairs++;}map<int,U>last;for(U i=0;i<K;i++)if(live[remain[i]]){assert(D[i].none());last[M[remain[i]]]++;}assert(last.size()==2&&last[-1]==2&&last[0]==2);assert(pairs==969767);
 ofstream out(pre+".certificate-verification.json");out<<"{\"scope\":\"new finite count only; no repaired-source review\",\"address_space_limit_bytes\":6442450944,\"complete_state_count\":"<<N<<",\"all_literal_rectangle_columns\":true,\"rectangle_orbits\":"<<orbits<<",\"verified_cancellations\":"<<pairs<<",\"small_residual_direct_graded_rank\":true,\"even_rank\":2,\"odd_rank\":2,\"homology_dimensions\":{\"-1\":2,\"0\":2}}\n";cerr<<"CERTIFICATE PASS even2 odd2\n";
}
