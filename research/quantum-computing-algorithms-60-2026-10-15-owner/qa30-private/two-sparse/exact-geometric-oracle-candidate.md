# Private candidate: exact two-sparse geometric oracle

Private mathematical candidate only. No canonical content, plan, metadata,
operational contract, receipt, hash, gate, readiness record or commit is changed.
Source read: Brandão et al., *Quantum SDP-Solvers: Better upper and lower
bounds*, arXiv:1705.01843v4, §2.3, PDF pp.22–26, Lemmas 15–16.
The arguments below fill the geometric assertions rather than relying on
Figures 1–2. Proposed reusable supplier: finite planar cone oracle.

## Exact contract

Let $m\ge1$, $r>0$, and let $\alpha,c',b_j,a_j$ be rational. Define
$$P=\{y\ge0:\mathbf1^Ty\le r,\ b^Ty\le\alpha,\ a^Ty\ge c'\}.$$
There is a procedure which returns a rational vector in $P$ with at most two
nonzero coordinates, or correctly reports $P=\varnothing$. It uses one
finite search and two finite ordered minimum operations on the $m$ points,
and a constant number of rational arithmetic/comparison operations after
their indices and values are available. Bit costs of arithmetic are separate
from this count. The quantum $O(\sqrt m)$ query implementation is conditional
on suppliers for these exact finite search/minimum interfaces and their
confidence amplification; this note does not assert those suppliers proved.

For any prescribed $N>0$, every feasible $y$ of norm $N$ has a feasible
replacement supported on at most two coordinates with the same norm $N$.
This last assertion is existence, without assuming a generic LP theorem.

## Region and rays

If $\alpha\ge0,c'\le0$, return $y=0$. No description of the union below is
needed in this branch. In particular, the union need not literally be the
whole plane when one parameter is zero; the source's informal case (c)
should not be used for that assertion.

In every other branch let $v=(\alpha/r,c'/r)$ and
$$G=\bigcup_{0<N\le r}\{(b,a):b\le\alpha/N,\ a\ge c'/N\}.$$
It is exactly the following closed intersection, with its indicated ordered
rational ray generators $u,w$ based at $v$:

| Conditions | Inequalities for $G$ | $u$ | $w$ |
| --- | --- | --- | --- |
| $\alpha<0,c'<0$ | $b\le\alpha/r$, $a\ge(c'/\alpha)b$ | $(0,1)$ | $(\alpha,c')$ |
| $\alpha<0,c'\ge0$ | $b\le\alpha/r$, $a\ge c'/r$ | $(0,1)$ | $(-1,0)$ |
| $\alpha>0,c'>0$ | $a\ge c'/r$, $a\ge(c'/\alpha)b$ | $(\alpha,c')$ | $(-1,0)$ |
| $\alpha=0,c'>0$ | $b\le0$, $a\ge c'/r$ | $(0,1)$ | $(-1,0)$ |

In each row $\det(u,w)>0$ and the counterclockwise angle $\beta$ from $u$
to $w$ lies strictly between zero and $\pi$. Thus $G=v+K$, where
$K=\{su+tw:s,t\ge0\}$. All boundary rays, including $c'=0$ in row two,
are covered. For the first row choose $N=\alpha/b$ to prove the reverse
inclusion; its hypotheses give $b<0$, $0<N\le r$, $Nb=\alpha$ and
$Na\ge c'$. For the third and fourth choose $N=c'/a$; for the second choose
$N=r$. These also give explicit rational scale recovery. Conversely direct
multiplication of the defining inequalities for any $N\le r$ gives each
listed pair. For example, in row one $b\le\alpha/N$ implies
$N\ge\alpha/b$, and $Na\ge c'$ implies $a\ge c'/N\ge(c'/\alpha)b$;
in row three $a\ge c'/N$ and $Nb\le\alpha$ imply
$a\ge(c'/\alpha)b$ if $b>0$, while that inequality is automatic if
$b\le0$.

## Exact score definition and proof

Search for $p_j=(b_j,a_j)\in G$ using the displayed rational inequalities.
If found, return its one-coordinate solution using the displayed scale.
Otherwise $z_j=p_j-v$ is nonzero and is outside $K$. Define $t_j$ to be its
unique counterclockwise angle from $u$ in $(\beta,2\pi)$. The two scores are
$$A_j=2\pi-t_j,\qquad B_j=t_j-\beta.$$
Choose $j$ minimizing $A_j$ and $k$ minimizing $B_k$, breaking equal scores
by index. Equivalently $t_j=t_{\max}$ and $t_k=t_{\min}$. These are oriented
ray distances, not unoriented angles between lines.

No trigonometric evaluation is necessary. For any nonzero rational $z$, put
$H(z)=0$ when $\det(u,z)>0$, or when $\det(u,z)=0$ and $u\cdot z>0$;
put $H(z)=1$ otherwise. Lexicographic comparison of $H$ first, followed
within the same half by the sign of $\det(z,z')$, orders increasing
counterclockwise angles in $[0,2\pi)$. A positive determinant means the
first angle is smaller; zero determinant within one half means equal
angles. Compare indices only on equal angles. Reverse this angular order
for the $A$ minimum and use it directly for the $B$ minimum. This is an
exact rational comparator, including opposite rays and negative collinearity.

Here is the complete geometric dichotomy. If
$D=t_{\max}-t_{\min}<\pi$, all vectors $z_i$ lie in the closed sector
$[t_{\min},t_{\max}]$ of aperture less than $\pi$. This sector is the
intersection of its two inward linear halfplanes, is disjoint from $K$,
and excludes zero for positive combinations of its nonzero generators:
dotting with the unit vector at its middle angle is strictly positive.
Consequently every convex combination of the $z_i$ remains in this
sector and no convex combination of the $p_i$ belongs to $G$.

If $D=\pi$, the two extreme vectors are opposite. Writing
$z_j=-\lambda z_k$ with $\lambda>0$, the convex combination
$(z_j+\lambda z_k)/(1+\lambda)=0$ gives the corner $v\in G$.
The scalar $\lambda$ is rational, obtainable from either nonzero coordinate.
This covers the equality boundary that a strict angle test would miss.

If $D>\pi$, choose $h=u+w$ in the interior of $K$. Necessarily
$t_{\min}<\pi$ and $t_{\max}>\beta+\pi$. Therefore
$\det(z_j,z_k)>0$, $\det(h,z_k)>0$, and $\det(z_j,h)>0$.
The exact planar identity
$$h=Lz_j+Mz_k,\quad L=\frac{\det(h,z_k)}{\det(z_j,z_k)}>0,\quad M=\frac{\det(z_j,h)}{\det(z_j,z_k)}>0$$
shows that the segment contains
$(Lz_j+Mz_k)/(L+M)=h/(L+M)\in K$. Thus the extreme pair works.
All quantities in this identity are rational. These three cases prove that
one search and the two independently specified minima are complete. They
also prove the source's angle criterion with equality:
$$A_j+\beta+B_k\le\pi\quad\Longleftrightarrow\quad D\ge\pi.$$
There is no reliance on a diagram or an unnamed convex-hull primitive.

The algorithm need not compare an irrational angle with $\pi$. Once the
extreme pair is known, intersect $[0,1]$ with the two closed rational
halfspace constraints on $\lambda p_j+(1-\lambda)p_k$. Each constraint
is $s\lambda\le t$ or $s\lambda\ge t$ with rational coefficients; if
$s=0$, retain the whole interval or reject it according to its constant
inequality. Otherwise divide with the appropriate sign. An empty interval
means no convex combination belongs to $G$, by the dichotomy. A nonempty
closed interval has a rational least endpoint, which gives $q$. Use the
row-specific scale above to return $y=Nq$. No open endpoints or midpoints
are needed because $G$ and the interpolation interval are closed.

Finally, for the fixed-norm assertion use the same dichotomy with corner
$(\alpha/N,c'/N)$ and the upper-left quadrant cone generated by $(0,1)$
and $(-1,0)$. If $q=y/N$ has its convex combination in that quadrant,
the empty-sector alternative is impossible. Either a single point or the
extreme pair supplies $q'$ there. Then $Nq'$ preserves the norm and all
constraints. The zero-norm case is $y=0$ and requires no division.

## Coherent-label extension with zero sentinel scores

This extension is conditional only on the following explicit robust-minimum
supplier. It does not assume that two minima come from a common sampled
estimate table. At every index $i$, let $S_i$ be a nonempty set of supported
good trace labels, each a rational estimate $a_i'$ satisfying
$|a_i'-a_i|\le\theta$. Given one of the finite score orders below, the
supplier returns a supported good label at some index with score $s_*$ and
has the property
$$\text{for every index }i\text{ there is a label in }S_i\text{ with score at least }s_*.$$
Equivalently there is no index all of whose good labels have strictly smaller
score. The guarantee must hold jointly with goodness of the returned label,
with a declared conditional failure probability and query/gate cost. The
scores may be represented by the exact rational angular order, rather than
floating-point angles. Any lexical tie rule must preserve this numeric
nondomination implication. Arbitrarily small good-label probabilities,
bad-label tails and sampler work/uncomputation belong to this supplier's
proof, not to the finite geometry below.

Fix a good $\widetilde c$, let $c'=\widetilde c-(r+1)\theta$, and retain the
same $G$, corner and rays. The trivial $\alpha\ge0,c'\le0$ branch returns
zero. For every label point $p=(b_i,a_i')$, define **both** scores to be
zero if $p\in G$. Otherwise define
$$A(p)=2\pi-t(p)>0,\qquad B(p)=t(p)-\beta>0.$$
These are ordered by an initial rational membership test and then by the
rational angular comparator already specified. Run the robust-minimum
supplier separately on $A$ and $B$. If either selected label is in $G$,
return the corresponding one-coordinate solution. Otherwise call the
selected labels $p_j^*$ and $p_k^*$ and put
$$T=2\pi-A(p_j^*),\qquad S=\beta+B(p_k^*).$$
Thus $T,S\in(\beta,2\pi)$, but one must not assume $S\le T$.
Test the selected pair by the exact rational interpolation procedure above.
If it intersects $G$, return its scaled convex combination. If not, return
`EMPTY` with the good-event implication $\alpha<v_D$, where $v_D$ is the
attained bounded dual optimum from the separate sandwich lemma. This
`EMPTY` need not certify emptiness for every possible good estimate table.
It certifies that at least one good table is empty, which is sufficient for
the threshold conclusion proved below.

### Vertical interpolation lemma

For every fixed rational $b$, the set
$$I_b=\{a:(b,a)\notin G\}$$
is an interval: it is empty, the whole real line, or an open lower interval.
Indeed each displayed halfspace description of $G$ has, on a fixed vertical
line, either no admissible values or a closed upper interval. On $I_b$,
$z=(b,a)-v$ is nonzero and its angle $t(z)\in(\beta,2\pi)$ is continuous.
One direct justification is that normalization $z\mapsto z/\|z\|$ is
continuous away from zero, and counterclockwise angle on the unit circle
with the closed cone arc removed is a continuous coordinate with image
$(\beta,2\pi)$. This is the usual continuous inverse parametrization
$(\cos t,\sin t)$ after rotating the reference ray to $u$; the removed
arc contains its possible branch cut. If $b=v_b$, every outside vector is
vertically downward, because the upward vertical ray belongs to every
listed $K$; thus the angle is constant and there is no origin singularity.
Consequently any angle between two outside points on the same vertical
line is realized by a vertical interpolation of those points. Interpolating
two $\theta$-good estimates stays $\theta$-good. Since $I_b$ is an interval,
all interpolated points stay outside $G$.

### Completeness proof on the robust-minimum good event

Because both selected scores are positive, the supplier property for $A$
gives, at every index $i$, a good label $p_i^-$ **outside** $G$ with
$t(p_i^-)\le T$: an in-$G$ label has score zero and cannot be its witness.
The supplier property for $B$ likewise gives a good outside label $p_i^+$
with $t(p_i^+)\ge S$. These witness labels need not be the same and need
not have appreciable probability. Their existence is the precise supplier
property used here.

If $S\le T$ and $T-S\ge\pi$, the two selected endpoints have the exterior
angular gap required by the exact dichotomy. Their segment intersects
$G$, including equality via antipodal cancellation. Hence the finite
interpolation test succeeds.

If $S\le T$ and $T-S<\pi$, at each index the closed angular interval between
$t(p_i^-)$ and $t(p_i^+)$ meets $[S,T]$: its lower endpoint is at most
$T$ and its upper endpoint is at least $S$. The vertical interpolation
lemma therefore supplies a $\theta$-good estimate $\bar a_i$, outside
$G$, with angle in $[S,T]$. Every point of this new good estimate table
lies in the same closed exterior sector of aperture less than $\pi$.
The exact sector argument proves that its convex hull misses $G$.

If $S>T$, choose any $t_0\in(T,S)$. At every index the two good witness
angles straddle $t_0$, so vertical interpolation supplies a $\theta$-good
estimate $\bar a_i$ at exactly that angle. All new point vectors are
positive multiples of one exterior ray. Every convex combination remains
on that ray and misses $G$. This also proves emptiness of one good table.

In the two latter cases, the equivalence between membership of the bounded
estimated polytope and a convex combination in $G$ shows that the polytope
for $\bar a$ is empty. If $\alpha\ge v_D$, the bounded optimal dual
$y^*$ belongs to **every** $\theta$-good estimated polytope by the separate
sandwich lemma, including this interpolated table. This is a contradiction.
Therefore these failure cases imply $\alpha<v_D$. In particular when
$\alpha\ge v_D$, two robust minima necessarily give an in-$G$ label or a
pair whose rational interpolation succeeds. No simultaneous-minimizer
completion preserving the selected endpoints has been assumed.

For any successful pair, let $q_j=\lambda$, $q_k=1-\lambda$ and let
$N\le r$ be its recovered scale. The selected estimates are good, so
$$\sum_i a_i y_i\ge c'-\theta\|y\|_1\ge\widetilde c-(2r+1)\theta\ge c-2(r+1)\theta.$$
The objective, norm and nonnegativity constraints hold exactly. If $j=k$
but the two selected labels differ, merge the two weights onto that index
and use the weighted average estimate
$\lambda a_j^*+(1-\lambda)a_k^*$, which remains $\theta$-good and preserves
the interpolated trace inequality. No conflicting value assignment occurs.
The original residual slack is thus at most $2(r+1)\theta$, or
$2R(r+1)\theta\le4Rr\theta$ for $X=R\rho$ and $r\ge1$.

This proves the round oracle's threshold completeness and sound output
properties conditional on the two robust-minimum good events and the good
scalar trace estimate. It also proves the source's stronger witness form:
if $P_0(\rho)\cap\{\|y\|_1\le r\}$ is nonempty, that exact witness is
feasible for every good estimate table by the sandwich inclusion, so the
same contradiction rules out failure. A returned vector belongs to the
stated relaxed exact polytope. Therefore if that relaxed polytope is empty,
no successful return is possible on the good event and `EMPTY` correctly
excludes exact bounded feasibility.

A preliminary sampled membership search is optional for this extension;
it may produce a verified good one-sparse return, but completeness is
provided by the sentinel-score minima even if that search misses. If each
robust minimum costs $\widetilde O(\sqrt m)$ sampler queries with its
conditional failure budget, two such calls preserve that order. This last
resource assertion is conditional on the robust-minimum supplier; this
note supplies its geometric consumer, not its quantum proof. On a physical
bad event any claim can fail, and its probability must be budgeted by the
parent algorithm. Low-level unproved timeouts remain distinct from the
proved bounded-error `EMPTY` branch.
