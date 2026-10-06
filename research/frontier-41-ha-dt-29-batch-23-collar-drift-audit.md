# Batch 23 period-frontier collar-drift audit

## Finding

The collar-drift construction in
`research/frontier-41-ha-dt-29-batch-23-poincare-bendixson-frontier-carrier.md`
survives the requested checks, provided its band estimates and open-neighborhood
extension are stated exactly. It handles arbitrarily small angular speed near
saddle polycycles: choosing the drift below the minimum angular speed forces
infinitely many turns, while the additional $L(s)$ bound controls ambient
motion during each turn. The proposed $C^1$ extension by zero on the
frontier is valid for an arbitrary compact frontier, including a nonsmooth
saddle graph; it uses distance estimates rather than a normal coordinate.
Teschl Theorem 7.16 applies once the modified field is $C^1$ on an open
neighborhood of the parameter disk, the orbit stays in a compact subset, and
the frontier contains only finitely many equilibria.

## Angular speed and the omega-limit calculation

On the open period annulus, the product chart gives
$X=a(s,\theta)\partial_\theta$, with $a>0$. For every fixed $s<1$,
compactness of the phase circle gives $m(s)=\min_\theta a(s,\theta)>0$;
there is no need for a positive lower bound uniform as $s\uparrow1$. With
$L(s)=\max_\theta\|\partial_s\Psi(s,\theta)\|$, the proposed choice
\[
0<b(s)\le \min\left\{(1-s)^2,
  \frac{(1-s)^2m(s)}{1+L(s)}\right\}
\]
gives, for $Y=X+b(s)\partial_s$,
\[
\dot s=b(s),\qquad \dot\theta=a(s,\theta),\qquad
0<\frac{ds}{d\theta}\le\frac{(1-s)^2}{1+L(s)}.
\]
Consequently the time to reach $s=1$ is infinite, since
$\int ds/b(s)\ge\int ds/(1-s)^2=\infty$. The unwrapped phase makes
infinitely many turns, even if $m(s)\to0$, since
\[
\frac{d\theta}{ds}=\frac{a}{b}\ge\frac{m(s)}{b(s)}
\ge\frac{1+L(s)}{(1-s)^2}.
\]
Thus a degenerating saddle passage only makes the modified trajectory slower;
it cannot stop its phase from making a full turn at any finite $s<1$, and
the total number of turns is infinite.

The tracking estimate is also correct. During one unit of unwrapped phase,
$\Delta s=O((1-s_k)^2)$ for a turn beginning at $s_k$. At a fixed
phase, the ambient displacement from the point on $C_{s_k}$ is at most
\[
\int L(s)\,ds\le\int (1-s)^2\,d\theta\le(1-s_k)^2.
\]
Every late turn is therefore uniformly close to the full original periodic
leaf $C_{s_k}$. If $C_s\to\Gamma$ in Hausdorff distance, these two
estimates give both inclusions for $\omega_Y(y)=\Gamma$: each point of
$\Gamma$ is approached on every sufficiently late full turn, and all
late orbit points approach $\Gamma$. This argument needs the phase
coordinate to be normalized to period one (as written) and a consistent
orientation with $a>0$.

## $C^1$ extension across $\Gamma$

The countable-band construction is sufficient, with the following explicit
interpretation. Choose a partition $\rho_n$ of $(s_1,1)$ that has
uniformly finite overlap and whose active indices tend to infinity as
$s\uparrow1$. Each support is compact in $(s_1,1)$, so its image band
$B_n=\Psi(S^1\times\operatorname{supp}\rho_n)$ is compact and has
$d_n=\operatorname{dist}(B_n,\Gamma)>0$. Let $W=\Psi_*\partial_s$,
and take $M_n\ge1$ to bound the ambient Euclidean $C^1$ norm of
$\rho_nW$ on $B_n$. Choosing constants $c_n>0$ with
\[
c_n\le\inf_{\operatorname{supp}\rho_n}q,\qquad
c_nM_n\le2^{-n}d_n,
\]
where $q=\min\{(1-s)^2,(1-s)^2m(s)/(1+L(s))\}$, gives
$b=\sum_n c_n\rho_n>0$ and $b\le q$. On $B_n$, both
$|c_n\rho_nW|$ and $\|D(c_n\rho_nW)\|$ are at most
$2^{-n}d_n\le2^{-n}\operatorname{dist}(z,\Gamma)$. Finite overlap and
the cofinal indexing then imply
\[
\frac{|V(z)|}{\operatorname{dist}(z,\Gamma)}\longrightarrow0,
\qquad \|DV(z)\|\longrightarrow0
\quad(z\to\Gamma),
\]
for $V=bW$. Defining $V=0$ on and outside $\Gamma$ is therefore
$C^1$, with $DV|_\Gamma=0$. No smoothness of $\Gamma$ is being
used. The cutoff flat at the inner collar edge similarly avoids a seam at
$s=s_1$.

The proof should say that $M_n$ is an ambient-coordinate norm and that
the bands have finite overlap with indices cofinal at the outer end. Without
those choices, the assertion that the sum and its derivative tend to zero
would not follow just from pointwise small coefficients. The stated
construction does make those choices available.

## Teschl Theorem 7.16 hypotheses

The source locator in the active memo is Teschl, *Ordinary Differential
Equations and Dynamical Systems*, §7.3, Theorem 7.16, printed pp. 223–224.
The theorem requires a $C^1$ field on an open subset of $\mathbb R^2$,
a compact omega-limit set of one positive or negative semiorbit, and only
finitely many fixed points in that limit set. It does not require a
Morse–Smale field or hyperbolicity of those fixed points.

For this application, the author must make the domain open: extend the
characteristic field from the disk to an open planar neighborhood (including
across $\partial D$ if $\Gamma=\partial D$), and extend the drift by
zero across $\Gamma$. Since $\Gamma$ is invariant for $X$ and
$Y=X$ there, uniqueness for the $C^1$ ODE prevents the drifted orbit
from crossing $\Gamma$. It stays in the compact closed region enclosed by
the nested curves. The drift estimates show its omega-limit set is exactly
$\Gamma$, hence compact and connected. The characteristic-disk genericity
assumption gives finitely many zeros of $X$; the drift has no zero on its
support because $ds(Y)=b(s)>0$, and it vanishes on $\Gamma$. Therefore
$\Gamma$ contains only finitely many equilibria of $Y$, as required.
If the later argument wants to call them hyperbolic saddles, it must also
exclude centers and use $DV|_\Gamma=0$, which preserves $DY=DX$ there.

So the Teschl application is available after those domain and invariance
sentences are included. Its alternatives include a singleton equilibrium, a
periodic orbit, or a finite set of equilibria with connecting trajectories;
the separating property of $\Gamma$ excludes the singleton here.
Converting the connecting-orbit alternative to a finite saddle graph
additionally uses the characteristic singularity types
and the two local unstable branches of each hyperbolic saddle. The theorem
does not itself prove the later chain-transitivity or no-tree argument; those
remain separate local steps in the active memo.

## Scope of this audit

I found no defect in the speed bounds or the $C^1$-flat drift extension as
written above. This audit supports the collar-drift method for making
$\Gamma$ an omega-limit set and applying Theorem 7.16. It does not certify
the independent period-annulus product construction, the local proof of every
part of Teschl's theorem, or the downstream claim that the resulting finite
graph has the required frontier incidence. No canonical batch-23 item,
manifest, receipt, ledger, or controller state was edited.
