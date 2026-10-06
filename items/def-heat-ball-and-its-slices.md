---
id: def-heat-ball-and-its-slices
kind: definition
title: Heat balls and their time slices
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - thm-exponential-beats-every-polynomial
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - def-countable-choice
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-heine-borel-rn
  - def-metric-compactness
  - def-metric-interior-closure-boundary
  - def-euclidean-inner-product
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.3, printed p. 155–156, definition (6.54) and slice formula (6.55) with Figure 6.1"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1 (heat kernel and its explicit form); Chapter 6 §6.1"
---

## Definition

Assume Countable Choice. Let $n\ge1$, and let $\Gamma$ be the heat kernel of
[[def-heat-kernel]], with $|x-y|^2=\langle x-y,x-y\rangle$ the Euclidean square
of [[def-euclidean-inner-product]]. For a space-time point $P=(x,t)\in\mathbb R^n\times\mathbb R$
and $r>0$ the **heat ball** is
$$E_r(t,x)=E_r(P):=\{(y,s)\in\mathbb R^{n+1}:s<t,\ \Gamma(x-y,t-s)\ge r^{-n}\}\cup\{(x,t)\}.$$
Write $\tau:=t-s$ for the time depth below the top point. Record the following
facts.

(i) $E_r(t,x)$ is compact, and $(x,t)$ is its unique point of maximal time;

(ii) for $0<\tau<r^2/(4\pi)$ the time slice is the closed ball
$$\{y:(y,t-\tau)\in E_r(t,x)\}=\overline B\bigl(x,\rho_n(\tau)\bigr),\qquad \rho_n(\tau):=\sqrt{2n\tau\log\tfrac{r^2}{4\pi\tau}},$$
the slice at $\tau=r^2/(4\pi)$ is the single point $\{x\}$, and the slice is
empty for $\tau>r^2/(4\pi)$; the function $\rho_n$ is continuous on
$(0,r^2/4\pi)$ and $\rho_n(\tau)\to0$ as $\tau\downarrow0$;

(iii) $\displaystyle\sup_{0<\tau<r^2/4\pi}\rho_n(\tau)=\frac r2\sqrt{\frac{2n}{\pi e}}$,
attained at $\tau=r^2/(4\pi e)$, so
$E_r(t,x)\subseteq\overline B\bigl(x,\tfrac r2\sqrt{2n/\pi e}\bigr)\times[t-r^2/4\pi,t]$;

(iv) the boundary is
$\partial E_r(t,x)=\{(y,s):s<t,\ \Gamma(x-y,t-s)=r^{-n}\}\cup\{(x,t)\}$, and on
the level set $\Gamma=r^{-n}$ the gradient of $\Gamma$ is nowhere zero, so that
level set is a $C^\infty$ hypersurface.

## Remarks

- **The slice formula is algebra.** Taking $n$-th roots in
  $\Gamma(x-y,\tau)=(4\pi\tau)^{-n/2}e^{-|x-y|^2/(4\tau)}\ge r^{-n}$
  ([[def-heat-kernel]]) gives $|x-y|^2\le2n\tau\log\frac{r^2}{4\pi\tau}$, whose
  right side is $\rho_n(\tau)^2$; the logarithmic factor is positive exactly
  for $0<\tau<r^2/(4\pi)$, vanishes at $\tau=r^2/(4\pi)$ (forcing $y=x$, so the
  slice there is the single point $x$), and is negative for
  $\tau>r^2/(4\pi)$, where no point of the level set or of its superlevel set
  remains. This is the only reading of the inequality $\Gamma\ge r^{-n}$
  at the endpoint $\tau=r^2/(4\pi)$; the enclosed region and its width are
  unaffected.

- **Compactness (i) and the enclosure (iii).** First, $E_r(t,x)$ is closed in
  $\mathbb R^{n+1}$: if points $(y_k,s_k)$ with $s_k<t$ and
  $\Gamma(x-y_k,t-s_k)\ge r^{-n}$ converge to $(y_0,s_0)$ with $s_0<t$, then
  continuity of $\Gamma$ gives $\Gamma(x-y_0,t-s_0)\ge r^{-n}$; if
  $s_0=t$, then $t-s_k\to0$ and the slice bound
  $|x-y_k|^2\le2n(t-s_k)\log\frac{r^2}{4\pi(t-s_k)}\to0$ forces
  $y_0=x$, so the limit is the top point ([[def-metric-interior-closure-boundary]]).
  The enclosure in (iii) bounds $E_r(t,x)$; closed and bounded subsets of
  $\mathbb R^{n+1}$ are compact ([[thm-heine-borel-rn]],
  [[def-metric-compactness]]). The maximisation of
  $\tau\log\frac{r^2}{4\pi\tau}$, whose substitution
  $u=4\pi\tau/r^2$ reduces it to $\frac{r^2}{4\pi}\,u\log\frac1u$ with maximum
  $\frac{r^2}{4\pi e}$ at $u=1/e$, follows by differentiating $u\log(1/u)$: its derivative is $\log(1/u)-1$, positive for $u<1/e$ and negative for $u>1/e$ ([[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]]). Also $\tau\log(r^2/(4\pi\tau))\to0$ as $\tau\downarrow0$: writing $\tau=(r^2/(4\pi))e^{-v}$ reduces this to a constant times $ve^{-v}\to0$ ([[thm-exponential-beats-every-polynomial]]). The top point is the
  unique point of $E_r(t,x)$ with $s=t$, since the defining inequality requires
  $s<t$.

- **The boundary (iv).** On the level set $\Gamma=r^{-n}$ one has $\Gamma>0$.
  If the spatial gradient vanishes, $\nabla_y\Gamma(x-y,\tau)=0$, then
  $y=x$ by the explicit formula; at such a point the time derivative
  $\partial_s\Gamma(x-y,t-s)=-\partial_\tau\Gamma(0,\tau)$ is
  $-\bigl(-\tfrac n{2\tau}\bigr)\Gamma(0,\tau)\ne0$
  ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]). Hence the full
  gradient in $(s,y)$ never vanishes on the level set, which is therefore a
  $C^\infty$ hypersurface of the open half-space $s<t$
  by the implicit function theorem with higher regularity ([[thm-parametrized-implicit-function-theorem-with-higher-regularity]]), applied with a nonzero gradient component as the dependent coordinate. Nonzero gradient also gives points on both sides of each level point, so the displayed level is the boundary below time $t$. The adjoined top point is a boundary point, since $(x,t-\tau)\in E_r$ for small $\tau>0$ while no point at a time greater than $t$ belongs to $E_r$; it is not isolated.

- **Choice.** Countable Choice is the declared ambient hypothesis and is carried
  by the topology and calculus suppliers; the definition and the displayed
  computations select no sets.
