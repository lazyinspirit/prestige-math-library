# Batch 23 distinct-saddle-leaf perturbation audit

**Scope.** Research-only proof audit of the proposed rel-collar perturbation
separating the ambient leaves of the finitely many saddle tangencies. I changed
no item, manifest, receipt, coverage map, or controller state.

## Finding

The proposed perturbation is valid under the approved countable-choice
strength. A leaf may be dense and nonembedded, but its intersection with a
fixed local transversal is countable when the leaf is given its intrinsic
immersed-manifold topology. Avoiding the finitely many previously used leaves
therefore remains possible in every arbitrarily small transverse interval.
The map can be changed by a constant transverse-coordinate shift near each
saddle, cut off in a regular annulus. This keeps the saddle and every other
characteristic singularity fixed in the source, preserves their Hessians and
indices, and leaves the prescribed regular boundary collar unchanged.

The only formal packaging caveat is regularity: the library's maximal-leaf
second-countability theorem is stated for smooth distributions, while the
batch-23 statement is $C^2$. Its plaque-chain/countability proof uses only the
countable box atlas and local plaque structure, so its second-countability
part extends verbatim to a $C^2$ foliation. Record that local $C^2$
interface explicitly if this perturbation is added as a batch carrier. This
extension adds no choice beyond ACω.

## Countable intersection with a transversal

Let $M$ be second countable and let $F$ be a codimension-one $C^2$
foliation. Give a leaf $L$ its intrinsic topology as a maximal connected
immersed integral manifold, with inclusion $i_L:L\to M$. Under ACω, $L$ is
second countable. For smooth distributions this is the conclusion of
`thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds`; its
proof chooses a countable foliation-box cover and builds the leaf atlas from
the countable plaque-chain closure. The same argument for a $C^2$ atlas has
the same countable-choice use.

Let $\tau:J\to M$ be an embedded transverse interval contained in one
foliation box. The set

$$
S_L=i_L^{-1}(\tau(J))\subset L
$$

is discrete in the *intrinsic* topology on $L$. At $x\in S_L$, shrink a
leaf chart about $x$ so its image lies in the single plaque through
$i_L(x)$. That plaque meets the vertical transversal $\tau(J)$ at only
one point. Since the leaf inclusion is locally a plaque diffeomorphism, the
shrunk intrinsic neighborhood meets $S_L$ only at $x$. This proof does
not treat $L$ as an embedded or closed subset of $M$; it applies to dense
leaves.

If $(B_n)_{n\in\mathbb N}$ is a countable basis of $L$, assign to
$x\in S_L$ the least $n$ such that $x\in B_n$ and
$B_n\cap S_L=\{x\}$. Such an $n$ exists because $S_L$ is discrete.
The assignment is injective, so $S_L$, and hence $\tau^{-1}(L)$, is at most
countable. This discrete-subset argument is choice-free once the countable
basis is fixed.

## Rel-collar perturbation

Assume $h:D^2\to M$ is $C^2$, its characteristic covector is nonzero on an
open boundary collar $C$, and its characteristic zeros are a finite set of
nondegenerate centers and saddles. Fix any desired $C^2$ tolerance. List the
saddles as $p_1,\ldots,p_m$; this is a finite enumeration.

Choose pairwise disjoint source disks $V_i\Subset
\operatorname{int}(D^2)\setminus C$, each containing $p_i$ and no other
characteristic zero. Shrink them so $h(\overline V_i)$ lies with positive
margin inside a target foliation box $Q_i\cong B_i\times I_i$, with
coordinates $(Y_i,z_i)$. In domain coordinates on $V_i$, write

$$
h(x)=(Y_i(x),u_i(x)),\qquad u_i=z_i\circ h.
$$

Choose a smaller disk $W_i\Subset V_i$ about $p_i$ and a smooth bump
$\rho_i\in C_c^\infty(V_i)$ equal to $1$ on a neighborhood of
$\overline W_i$. The compact support of $d\rho_i$ misses every zero of
$du_i$, so

$$
\eta_i:=\min_{x\in\operatorname{supp}(d\rho_i)}|du_i(x)|>0
$$

when that support is nonempty. (If it is empty, no transition estimate is
needed.) The minimum and the positive chart margin give a positive upper
bound on the size of a transverse shift that keeps the image in $Q_i$ and
cannot create a zero on the transition region.

At stage $i$, the earlier saddle images determine finitely many ambient
leaves $L_1,\ldots,L_{i-1}$. Let

$$
\tau_i(t)=\chi_i^{-1}(Y_i(p_i),t)
$$

be a short vertical transversal through $h(p_i)$. Each set
$\tau_i^{-1}(L_j)$ is at most countable by the preceding lemma, so their
finite union $E_i$ is at most countable. Every nonempty open subinterval of
$I_i$ is uncountable. Hence $I_i\setminus E_i$ meets every open subinterval:
choose $t_i\notin E_i$ arbitrarily close to $u_i(p_i)$, within the
smallness bound above. Define $\delta_i=t_i-u_i(p_i)$ and, on $V_i$, replace
the map during the homotopy by

$$
h_{i,s}(x)=\chi_i^{-1}\bigl(Y_i(x),u_i(x)+s\delta_i\rho_i(x)\bigr),
\qquad 0\le s\le1,
$$

leaving $h$ unchanged outside $V_i$. The bump is zero on a neighborhood of
$\partial V_i$, so the formulas glue as $C^2$ maps. They agree with $h$ on
$C$. On $W_i$, the transverse function changes by a constant, so $p_i$
remains the same critical point with exactly the same Hessian. On the
transition region,

$$
|d(u_i+s\delta_i\rho_i)|
\ge |du_i|-|\delta_i|\,|d\rho_i|>0
$$

by the shift bound. Elsewhere the differential is unchanged. Consequently
the characteristic zero set is unchanged throughout the homotopy: all old
centers and saddles remain nondegenerate with the same local types, and no
new zero appears. Since $\rho_i(p_i)=1$, the new saddle image is
$\tau_i(t_i)$, whose leaf differs from every earlier saddle leaf.

Repeat for the finite list. The supports are disjoint, so later operations do
not move earlier saddle images. After $m$ stages, all saddle images lie on
pairwise distinct ambient leaves. Each parameter can be chosen arbitrarily
small, so allocate a finite $C^2$-error budget among the stages to keep the
final map inside the prescribed neighborhood. Concatenating the finitely many
paths $s\mapsto h_{i,s}$ gives the required homotopy rel $C$, with the same
singularity set at every time.

## Choice audit and exact scope

- **ACω use:** obtain a countable foliation-box cover and countable intrinsic
  plaque atlas for a leaf. This is already the exact strength declared by
  `def-countable-choice` and used in the library proof of maximal integral
  leaves.
- **No further countable choice:** only finitely many saddle leaves are
  avoided at each stage, so their countable forbidden subsets have a finite
  union. No countable family of new transverse values is selected.
- **No full AC or dependent choice:** saddle enumeration, charts, bumps and
  parameter values involve only finitely many existential choices. The
  nonempty complement of a countable set in every interval follows from the
  choice-free uncountability of nondegenerate real intervals.
- **No embedded-image hypothesis:** the modification acts on the actual
  map's transverse coordinate in disjoint source disks. The leafwise
  coordinate map $Y_i$ may fail to be injective or immersive.
- **What it buys:** it eliminates a characteristic separatrix connection
  between *distinct* saddles, since a connected characteristic orbit maps
  into one ambient leaf and its terminal tails lie in the endpoint plaques.
  It does not eliminate homoclinic connections from a saddle to itself, nor
  prove the Poincaré–Bendixson frontier classification or graph ranking.

Thus the proposed perturbation is a sound local lemma at the existing ACω
budget. Its only adoption work is to state the $C^2$ leaf-countability
interface explicitly and attach the listed dependencies; the argument does
not justify treating distinct saddle leaves as part of the current
relative-genericity item until that repair is made.
