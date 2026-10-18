# Full finite BDI Dirac-mass example proposal

Use real matrices

e=[[1,0],[0,-1]], gamma=[[0,1],[-1,0]], s=[[0,1],[1,0]].

Their direct products give e²=s²=I, gamma²=-I, and all three pairwise anticommutators zero. For a real N-dimensional multiplicity space and a real symmetric involution B, set e_N=e⊗I_N, gamma_N=gamma⊗I_N and M_B=s⊗B. Then M_B is symmetric, M_B²=I and {M_B,e_N}={M_B,gamma_N}=0. This is exactly one fixed positive symmetry and one fixed negative Dirac generator with one positive mass, hence effective index q-d=1-1=0 in the approved normalized convention.

These are all masses in this fixed matrix model. An operator anticommuting with e_N has blocks [[0,U],[V,0]]. Symmetry gives V=U^T. Anticommutation with gamma_N gives U=U^T. Its square is identity iff U²=I. Thus every admissible mass is s⊗B for precisely a symmetric involution B on the multiplicity space; no hidden subset of masses was selected.

On the complexification define the explicit momentum family

H_B(k)=i k gamma_N+M_B,  k∈R.

Because gamma_N is real skew, i gamma_N is Hermitian, so H_B(k) is Hermitian. The anticommutator calculation gives H_B(k)²=(k²+1)I, hence it is gapped at zero for every k. This is a literal one-parameter family of finite matrices; its mass at k=0 is the normalized mass above.

Let T=complex conjugation K and C=e_N K. Both are antiunitary, T²=C²=1 and TC=CT=e_N. Directly,

T H_B(k) T^-1=−i k gamma_N+M_B=H_B(−k),

C H_B(k) C^-1=e_N(−i k gamma_N+M_B)e_N=i k gamma_N−M_B=−H_B(−k).

Their product is the chiral involution e_N and e_N H_B(k)e_N=−H_B(k). At k=0 these are exactly the finite T-commuting/C-anticommuting mass relations; at nonzero k they are the usual momentum-reversing BDI relations, which must be declared explicitly rather than claiming a pointwise T relation at fixed k.

For a pair of same-sized multiplicity involutions B,B_ref define

nu(B,B_ref)=dim_R ker(B+I)−dim_R ker(B_ref+I).

The spectral projections (I−B)/2 vary continuously and have locally constant integer rank, so nu is unchanged by gap-preserving mass homotopy. Block sum adds nu and common-reference stabilization leaves it unchanged. Conversely symmetric involutions of the same positive/negative multiplicities lie in the same real Grassmannian orbit, which is connected: O(N)/(O(k)×O(N-k)) is connected because its stabilizer meets both components of O(N) whenever N>0 (zero/equal-endpoint Grassmannians are a single point). Orthogonal conjugation therefore gives the needed path. After common stabilization, equality of nu is exactly equality of negative multiplicity, so it classifies these stable difference objects.

Take N=1, B=−1 and B_ref=+1. The displayed 2×2 family has nu=1. Block sums yield every nonnegative integer, and reversing a difference pair yields every negative integer. This proves that the explicit generator represents the unit of the effective KO^0(pt)=Z once the already required mass/KO comparison is proved; it is not inferred from a printed tenfold table. The integer does not jump along one gapped k-path; the integer-indexed direct-sum pairs are different stable phases, and any continuous interpolation changing nu must lose the involution/gap condition.

This concerns only the stated finite Dirac-mass model and its reference differences. It gives no lattice weak invariant, arbitrary-disorder equivalence or interaction theorem. The negative gamma-square and positive mass/symmetry conventions are displayed explicitly and need no relabelled signature table.
