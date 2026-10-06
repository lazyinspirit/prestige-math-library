# Batch 23 recurrence carriers: analytic addendum

Research-only supplement to the period-annulus audit. It records two short
local constructions that avoid importing a broad inverse-function or
extreme-value branch. No canonical item, manifest, receipt, or controller
record is changed.

## 1. Scalar return roots give the local $C^2$ inverse

Use this elementary parameter lemma instead of the full Euclidean inverse
function theorem.

**Scalar root lemma.** Let $P\subseteq\mathbb R^d$ be open, let
$F:P\times J\to\mathbb R$ be $C^2$, and suppose
$F(p_0,t_0)=0$, $F_t(p_0,t_0)\ne0$. On a small product neighborhood,
$F_t$ has constant sign and $|F_t|\ge c>0$. Choose
$t_-<t_0<t_+$ close enough that $F(p_0,t_-)$ and $F(p_0,t_+)$ have
opposite signs. By continuity this remains true for $p$ near $p_0$.
The intermediate-value theorem gives a root $t=T(p)$ between them, and
the fixed sign of $F_t$ makes it unique.

For nearby $p,q$, the one-variable mean-value theorem in $t$, followed
by a bound for $D_pF$ on a smaller compact rectangle, gives
\[
 |T(p)-T(q)|\le c^{-1}\sup\|D_pF\|\,|p-q|.
\]
Thus $T$ is continuous. To differentiate, write
\[
0=F(p+h,T(p+h))-F(p,T(p))
\]
and split the difference by inserting $F(p+h,T(p))$. Apply the mean-value
theorem to the first difference and the integral form of the one-variable
mean-value estimate to the second. Divide by $|h|$ and use continuity of
$T$ and of the first derivatives of $F$. This gives the Fréchet derivative
\[
 DT(p)=-\frac{D_pF(p,T(p))}{F_t(p,T(p))}.
\]
The right side is $C^1$, since $F\in C^2$, $T\in C^1$, and the
denominator stays away from zero. Hence $T\in C^2$. For a scalar
parameter $s$, differentiating once more gives
\[
 T''(s)=-\frac{F_{ss}+2F_{st}T'+F_{tt}(T')^2}{F_t},
\]
with all derivatives evaluated at $(s,T(s))$.

For the period chart, the quarter-turn of a nonvanishing $C^2$ planar
field is $C^2$; its selected transverse trajectory $\sigma$ is a $C^2$
section. Near a reference return, represent $\sigma$ as a graph: rotate
coordinates so one coordinate has nonzero derivative along $\sigma$, use
the mean-value theorem to invert that coordinate locally, and define a
$C^2$ signed graph function $r$ vanishing on $\sigma$. The local return
equation
\[
 F(s,t)=r(\Phi_t^X(\sigma(s)))=0
\]
is $C^2$, with $F_t\ne0$ because $X$ is transverse to the section.
The scalar root lemma proves the return-time function is $C^2$. The
compactness/least-period argument in the product-coordinate strategy
identifies this local root with the first return.

The same lemma supplies the local inverse of
$\Psi(\theta,s)=\Phi^X_{\theta T(s)}(\sigma(s))$. Fix a reference phase
and flow a nearby point back by that fixed reference time. In the resulting
section neighborhood, solve the scalar equation
$r(\Phi_{-u}^X(q))=0$ for the unique small time $u$. The root is
$C^2$ in $q$ by the lemma. Its intersection point on the graph section
has a $C^2$ section parameter $s$; the elapsed time divided by the
positive $C^2$ function $T(s)$ gives a local $C^2$ phase coordinate.
These local inverses agree because each orbit meets the global section once
and the phase is taken modulo its least period. Thus $\Psi$ is a $C^2$
diffeomorphism without a full Euclidean inverse-function theorem. The local
graph and scalar-root arguments should be included in the product item or
listed as its exact local suppliers.

## 2. Compact extrema and positive band distances

The finite constants in the drift construction follow from compactness
without selecting sequences of witnesses.

Let $K$ be a nonempty compact metric space and $f:K\to\mathbb R$
continuous. First, $f$ is bounded: the open sets
$f^{-1}((-n,n))$, $n\ge1$, cover $K$; a finite subcover gives one
integer bound for all of $K$. Let $a=\sup f(K)$. For each $n\ge1$,
the set
\[
 F_n=\{x\in K:f(x)\ge a-1/n\}
\]
is closed and nonempty by the definition of supremum. These sets are nested,
so they have the finite-intersection property. Compactness gives a point in
their intersection, and at that point $f=a$. Apply the same argument to
$-f$ for the minimum. The proof uses no sequence selection or choice
principle.

Consequently, for each fixed $s\in(0,1)$, the continuous functions
$a(s,\cdot)>0$ and $\|\partial_s\Psi(s,\cdot)\|$ on the compact circle attain
\[
 m(s)=\min_\theta a(s,\theta)>0,
 \qquad L(s)=\max_\theta\|\partial_s\Psi(s,\theta)\|<\infty.
\]
For two functions on the same compact phase circle,
$|\min f-\min g|\le\sup|f-g|$ and
$|\max f-\max g|\le\sup|f-g|$. To see parameter continuity without
choosing a sequence of phase points, fix $s_0$ and $\varepsilon>0$. At
each $\theta_0$, continuity at $(s_0,\theta_0)$ gives a product
neighborhood on which the value differs from $a(s_0,\theta_0)$ by less than
$\varepsilon/3$; shrink its phase neighborhood so
$a(s_0,\theta)$ also differs there by less than $\varepsilon/3$. A finite
cover of the phase circle and the minimum of its finitely many parameter
radii give
$\sup_\theta|a(s,\theta)-a(s_0,\theta)|<2\varepsilon/3$
for nearby $s$. Apply the same argument to
$\|\partial_s\Psi\|$. Hence $m,L$, and
$q(s)=\min\{(1-s)^2,(1-s)^2m(s)/(1+L(s))\}$ are continuous, with
$q>0$.

For each explicitly indexed partition band,
$B_n=\Psi(S^1\times\operatorname{supp}\rho_n)$ is compact as a
continuous image of a compact set. The function
$z\mapsto\operatorname{dist}(z,\Gamma)$ is 1-Lipschitz. Since $B_n$
and the compact frontier $\Gamma$ are disjoint, its attained minimum on
$B_n$ is positive; this is $d_n$. The compact support of $\rho_n$
similarly gives an attained positive minimum
$q_n=\min_{\operatorname{supp}\rho_n}q$. Finally $\Psi$ is $C^2$, so
$W=\Psi_*\partial_s$ is $C^1$; the continuous function
$\|\rho_nW\|+\|D(\rho_nW)\|$ attains a finite maximum $M_n-1$ on $B_n$.
These are real extrema of uniquely specified functions on compact sets.
The band index $n$ and the explicit partition determine each coefficient
$c_n$; no countable family of choices is involved.

Thus the drift item may cite this compact-extrema lemma (or include these
arguments inline) rather than depend on a broad sequential compactness or
extreme-value branch. The distance and derivative bounds used for the
$C^1$ zero extension are then exactly the stated bandwise inequalities.
