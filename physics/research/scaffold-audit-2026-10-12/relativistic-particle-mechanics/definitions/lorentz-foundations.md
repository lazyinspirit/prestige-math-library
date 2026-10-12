# Scoped Lorentz foundations for the RPP audit

This is a local mathematical replacement for the audit's needed Lorentz-vector
contracts. It avoids treating the six imported snapshots named at the end as
authoritative originals. It has no physical premise. The exact published
mathematics inputs actually read are [vector space](../../../../../items/def-vector-space.md),
[symmetric bilinear form](../../../../../items/def-bilinear-symmetric-skew-and-alternating-forms.md),
[nondegeneracy](../../../../../items/def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form.md),
[definiteness and inertia](../../../../../items/def-definiteness-inertia-and-signature-data-over-the-reals.md),
[Sylvester's law](../../../../../items/thm-sylvesters-law-of-inertia.md),
[Euclidean inner product](../../../../../items/def-euclidean-inner-product.md),
[finite Cauchy–Schwarz](../../../../../items/thm-cauchy-schwarz-finite.md), and
[path-connected implies connected](../../../../../items/thm-path-connected-implies-connected.md).
They are published mathematics items; their current hashes/status are recorded
in `../supplier-map.json`. In particular Sylvester's law supplies existence
and uniqueness of the real normal form from actual finite-dimensional linear
algebra. The imported snapshots stay read-only.

## Lorentz form, basis and causal classes

Let $V$ be a four-dimensional real vector space and let
$\eta:V\times V\to\mathbb R$ be symmetric, bilinear and nondegenerate, with
inertia $(3,1,0)$ (three positive, one negative, no zero directions). This is
the Lorentz form used here. Sylvester's law gives a basis with matrix
$\operatorname{diag}(1,1,1,-1)$; reordering gives an $\eta$-orthonormal ordered
basis $(e_0,e_1,e_2,e_3)$ with matrix $\operatorname{diag}(-1,1,1,1)$. This
argument normalizes the diagonal entries because Sylvester's normal form
already has entries $+1,-1,0$. Give $V$ the finite-dimensional topology
transported from $\mathbb R^4$ by any such basis isomorphism. A change of basis
is invertible linear and hence a homeomorphism by finite coordinate estimates,
so this topology is independent of the orthonormal basis. All open, closure
and connected-component claims below use this topology.

In these coordinates $v=t e_0+x^ie_i$ has
$\eta(v,v)=-t^2+|x|^2$, with $|x|^2=\sum_i(x^i)^2$. A nonzero vector is
timelike, null or spacelike as $\eta(v,v)$ is negative, zero or positive;
zero is none of these. The timelike set is the disjoint union
$$T_+=\{(t,x):t>|x|\},\qquad T_-=\{(t,x):t<-|x|\}.$$
Both sets are nonempty, open and convex: for $(t,x),(s,y)\in T_+$ and
$0\le\lambda\le1$,
$$(1-\lambda)t+\lambda s>(1-\lambda)|x|+\lambda|y|\ge|(1-\lambda)x+\lambda y|,$$
where the last step is the Euclidean triangle inequality; the $T_-$ proof is
the same after negating time. Thus both are path-connected, hence connected.
Explicitly, for any two points $v,w$ in either convex set, the map
$[0,1]\ni r\mapsto(1-r)v+rw$ is continuous and remains in that set, so it is
a path between them.
They are disjoint relatively open subsets whose union is the timelike set, so a
connected subset of that set cannot meet both. Therefore these are exactly its
two connected components. A **time orientation** is a choice of one of these
components as future, denoted $C^+$; the other is past. This is a choice of
mathematical structure, not a physical conclusion.

For the orientation $C^+=T_+$ the closures are
$$K^+=\overline{C^+}=\{(t,x):t\ge|x|\},\qquad K^-=\overline{C^-}=\{(t,x):t\le-|x|\}.$$
If $t<|x|$, continuity of $(t,x)\mapsto t-|x|$ gives a neighborhood disjoint
from $C^+$; if $t\ge|x|$, then $(t+\epsilon,x)\in C^+$ for every $\epsilon>0$
and tends to $(t,x)$. The other closure follows by the same argument. For the
other possible time orientation interchange $K^+$ and $K^-$. Their intersection
is $\{0\}$.

For $v,w\in K^+$, with coordinates $(t,x),(s,y)$, one has
$$t+s\ge|x|+|y|\ge|x+y|,$$
so $K^+$ is closed under addition and nonnegative scaling. If either summand
is in $C^+$, the first inequality is strict and the sum is in $C^+$. Also
$$-\eta(v,w)=ts-x\cdot y\ge|x||y|-x\cdot y\ge0$$
by finite Cauchy–Schwarz. For nonzero $v,w$, equality forces $t=|x|$,
$s=|y|$ and equality in Cauchy–Schwarz with positively aligned spatial parts;
thus both are future null and $w=\alpha v$ for some $\alpha>0$. Conversely
such parallel future null vectors have zero pairing. If one vector is zero,
equality also holds. The past orientation follows after reversing both time
coordinates. These statements supply future-causal finite-sum and equality
arguments without an unexamined imported cone lemma.

## Observer decomposition and energy positivity

Let $n$ be a future unit timelike vector, $\eta(n,n)=-1$. For every $v\in V$
define
$$h_n(v):=v+\eta(v,n)n,\qquad v=-\eta(v,n)n+h_n(v).$$
Then $\eta(h_n(v),n)=0$. The decomposition
$V=\mathbb R n\oplus n^\perp$ is unique: pairing a decomposition with $n$
fixes its coefficient, and a vector in both summands has zero coefficient and
is zero.

The restriction of $\eta$ to $n^\perp$ is positive definite. To see this,
choose the future orthonormal coordinates above, so $n=(n^0,n_s)$ with
$n^0>|n_s|$. If $w=(w^0,w_s)\in n^\perp$ were nonzero causal, then
$|w^0|\ge|w_s|$ and finite Cauchy–Schwarz gives
$$|\eta(n,w)|=|-n^0w^0+n_s\cdot w_s| \ge n^0|w^0|-|n_s||w_s| \ge(n^0-|n_s|)|w_s|>0$$
when $w_s\ne0$; if $w_s=0$, causality and nonzero $w$ imply $w^0\ne0$ and
$|\eta(n,w)|=n^0|w^0|>0$. This contradicts $w\perp n$. Hence every nonzero
vector in $n^\perp$ is spacelike and has positive squared norm. In particular
$|w|_n:=\sqrt{\eta(w,w)}$ is a genuine Euclidean norm on $n^\perp$.

For $c>0$ and $P\in K^+$ define the mathematical observer quantities
$$E_n(P):=-c\eta(P,n),\qquad q_n(P):=h_n(P).$$
For nonzero future causal $P$, $E_n(P)>0$: in future coordinates
$P=(P^0,P_s)$, $P^0\ge|P_s|$ and $P^0>0$ unless $P=0$, so
$$c^{-1}E_n(P)=P^0n^0-P_s\cdot n_s \ge |P_s|(n^0-|n_s|)>0$$
when $P_s\ne0$, while for $P_s=0$ it is $P^0n^0>0$. Since
$P=(E_n/c)n+q_n(P)$ and $q_n(P)\in n^\perp$, bilinearity yields
$$\eta(P,P)=-E_n(P)^2/c^2+|q_n(P)|_n^2.$$
Thus future null $P$ has $E_n=c|q_n|_n>0$; future timelike $P$ with
$m(P):=\sqrt{-\eta(P,P)}/c$ satisfies
$$E_n(P)^2=m(P)^2c^4+c^2|q_n(P)|_n^2.$$
If $P=mU$, $m>0$ and $\eta(U,U)=-c^2$, then $m(P)=m$ by direct bilinearity.
The physical identification of these mathematical quantities as measured
energy and momentum is still a separate postulate.

## Exact snapshot disposition

The physics snapshots
`items/def-affine-space-and-displacement.md`,
`items/def-lorentz-form-and-inertia.md`,
`items/def-causal-classification-of-lorentz-vectors.md`,
`items/def-time-orientation-and-future-causal-sets.md`, and
`items/lem-lorentz-form-has-orthonormal-basis.md`, and
`items/lem-timelike-cone-has-two-convex-components.md` contain compatible draft
contracts, but the corresponding canonical repo-root originals are absent.
They were inspected as content only and are not treated here as canonical
originals or as freshness-certified supplier edges. Their full paths, current
snapshot hashes, absent-original status, and the local replacement scope are
listed in `../supplier-map.json` and `../integration-changes.json`. The local
proof above derives the Lorentz basis, two timelike components, future cones,
observer positivity and finite-sum claims that the RPP clauses actually use.
