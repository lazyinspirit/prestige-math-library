---
id: def-heat-ball-and-its-slices
kind: definition
title: Heat balls and their time slices
status: published
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


For a unit spatial direction $v$, the picture shows the section $y=x+zv$:
its horizontal segment at time $s=t-\tau$ is $|z|\le\rho_n(\tau)$.
The full spatial slice is the $n$-dimensional closed ball in (ii).
Horizontal and vertical scales are independent; the outline is sampled from
the slice formula, rather than being a Euclidean circle.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\draw[->] (-2.2,-0.4) -- (-2.2,4.6) node[above] {$s$};
\draw[densely dashed] (0,-0.2) -- (0,4.4);
\draw[thick] plot coordinates {(0.0000,4.0000) (0.0801,3.9996) (0.1626,3.9980) (0.2192,3.9960) (0.2941,3.9920) (0.4294,3.9800) (0.5661,3.9600) (0.7379,3.9200) (0.8556,3.8800) (1.0209,3.8000) (1.0838,3.7600) (1.1858,3.6800) (1.2658,3.6000) (1.3306,3.5200) (1.3840,3.4400) (1.4284,3.3600) (1.4656,3.2800) (1.4966,3.2000) (1.5225,3.1200) (1.5438,3.0400) (1.5612,2.9600) (1.5749,2.8800) (1.5854,2.8000) (1.5929,2.7200) (1.5976,2.6400) (1.5998,2.5600) (1.6000,2.5285) (1.5996,2.4800) (1.5970,2.4000) (1.5923,2.3200) (1.5855,2.2400) (1.5766,2.1600) (1.5658,2.0800) (1.5530,2.0000) (1.5383,1.9200) (1.5217,1.8400) (1.5032,1.7600) (1.4828,1.6800) (1.4604,1.6000) (1.4361,1.5200) (1.4098,1.4400) (1.3814,1.3600) (1.3509,1.2800) (1.3181,1.2000) (1.2829,1.1200) (1.2452,1.0400) (1.2047,0.9600) (1.1613,0.8800) (1.1146,0.8000) (1.0641,0.7200) (1.0095,0.6400) (0.9501,0.5600) (0.8848,0.4800) (0.8123,0.4000) (0.7306,0.3200) (0.6362,0.2400) (0.5222,0.1600) (0.3712,0.0800) (0.2631,0.0400) (0.1863,0.0200) (0.0000,0.0000)};
\draw[thick] plot coordinates {(0.0000,4.0000) (-0.0801,3.9996) (-0.1626,3.9980) (-0.2192,3.9960) (-0.2941,3.9920) (-0.4294,3.9800) (-0.5661,3.9600) (-0.7379,3.9200) (-0.8556,3.8800) (-1.0209,3.8000) (-1.0838,3.7600) (-1.1858,3.6800) (-1.2658,3.6000) (-1.3306,3.5200) (-1.3840,3.4400) (-1.4284,3.3600) (-1.4656,3.2800) (-1.4966,3.2000) (-1.5225,3.1200) (-1.5438,3.0400) (-1.5612,2.9600) (-1.5749,2.8800) (-1.5854,2.8000) (-1.5929,2.7200) (-1.5976,2.6400) (-1.5998,2.5600) (-1.6000,2.5285) (-1.5996,2.4800) (-1.5970,2.4000) (-1.5923,2.3200) (-1.5855,2.2400) (-1.5766,2.1600) (-1.5658,2.0800) (-1.5530,2.0000) (-1.5383,1.9200) (-1.5217,1.8400) (-1.5032,1.7600) (-1.4828,1.6800) (-1.4604,1.6000) (-1.4361,1.5200) (-1.4098,1.4400) (-1.3814,1.3600) (-1.3509,1.2800) (-1.3181,1.2000) (-1.2829,1.1200) (-1.2452,1.0400) (-1.2047,0.9600) (-1.1613,0.8800) (-1.1146,0.8000) (-1.0641,0.7200) (-1.0095,0.6400) (-0.9501,0.5600) (-0.8848,0.4800) (-0.8123,0.4000) (-0.7306,0.3200) (-0.6362,0.2400) (-0.5222,0.1600) (-0.3712,0.0800) (-0.2631,0.0400) (-0.1863,0.0200) (0.0000,0.0000)};
\draw[thick] (-1.3181,1.2) -- (1.3181,1.2);
\draw[densely dashed] (-1.6,2.5285) -- (1.6,2.5285);
\fill (0,4) circle (2pt);
\fill (0,0) circle (2pt);
\node[anchor=west] at (1.9,4) {$(x,t)$};
\node[anchor=west] at (1.9,2.5285) {$s=t-\frac{r^2}{4\pi e}$ (widest)};
\node[anchor=west] at (1.9,1.2) {$s=t-\tau$};
\node[anchor=west] at (1.9,0) {$s=t-\frac{r^2}{4\pi}$};
\node at (0,3.15) {$E_r(t,x)$};
\node at (0,-0.6) {empty below};
\end{tikzpicture}
```

Both marked endpoints belong to the heat ball: the upper point is adjoined
in its definition, and the lower point is the singleton slice in (ii).
The dashed horizontal segment is the widest slice from (iii); the solid
horizontal segment illustrates a different interior time slice.
