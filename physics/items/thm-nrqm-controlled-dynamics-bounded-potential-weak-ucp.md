---
id: thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp
aliases: [nrqm-controlled-dynamics-bounded-potential-weak-ucp]
kind: theorem
domain: mathematics
title: "Bounded-potential weak UCP"
status: published
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-controlled-dynamics-radial-carleman-estimate, def-sobolev-space-wkp-and-its-norm, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-radial-carleman-estimate: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Jerison and C. E. Kenig, Unique continuation and absence of positive eigenvalues for Schrodinger operators, Annals of Mathematics 121 (1985) 463-494 (weak unique continuation for bounded potentials via Carleman weights)"
      url: "https://doi.org/10.2307/1971319"
    - title: "H. Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Chapter 9 (local H^2 calculus and cut-off products)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\Omega\subseteq\mathbb R^3$ be open and connected, let
$B\in L^\infty_{\mathrm{loc}}(\Omega;\mathbb C)$, and let
$\psi\in H^2_{\mathrm{loc}}(\Omega)$ satisfy $\Delta\psi=B\psi$ in the
distributional sense on $\Omega$ ([[def-sobolev-space-wkp-and-its-norm]]). If
$\psi=0$ almost everywhere on some nonempty open subset of $\Omega$, then
$\psi=0$ almost everywhere on $\Omega$.

## Facts & Assumptions

**Given:** Countable choice; a connected open set $\Omega\subseteq\mathbb R^3$; $B\in L^\infty_{\mathrm{loc}}(\Omega;\mathbb C)$; $\psi\in H^2_{\mathrm{loc}}(\Omega)$ satisfying $\Delta\psi=B\psi$ distributionally and vanishing almost everywhere on a nonempty open subset.

[F1] The space $H^2_{\mathrm{loc}}(\Omega)$ consists of functions whose weak derivatives through order two are square integrable on every relatively compact open subset. For $\chi\in C_c^\infty(\Omega)$, $u=\chi\psi$, extended by zero outside $\Omega$, belongs to $H^2(\mathbb R^3)$ and $\Delta u=\chi\Delta\psi+2\nabla\chi\cdot\nabla\psi+(\Delta\chi)\psi$. These product identities follow by integration against test functions; the right-hand terms are in $L^2$ on the cutoff support ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] For integer $s\ge1$, $\tau=s+1$, and compactly supported $H^2$ functions $u$ vanishing near $0$, the Carleman estimate is $\|r^{-\tau}u\|_2\le(2/s)\|r^{-\tau+2}\Delta u\|_2$, $r=|x|$ ([[thm-nrqm-controlled-dynamics-radial-carleman-estimate]]). Translation gives the same estimate about any center $x_0$, with $r=|x-x_0|$.

## Proof

1.1 Let $x_0\in\Omega$ have some neighborhood on which $\psi=0$ almost everywhere. Choose any $R>0$ with $\overline{B_R(x_0)}\subset\Omega$; no vanishing on this larger ball is assumed. Take a smooth cutoff $\chi$ supported in $B_R(x_0)$, equal to one on $B_{R/2}(x_0)$, and put $u=\chi\psi$, $e=2\nabla\chi\cdot\nabla\psi+(\Delta\chi)\psi$. By [F1], $u$ is compactly supported $H^2$, $\Delta u=Bu+e$, and $e\in L^2$ has support in $R/2\le r<R$, where $r=|x-x_0|$. The initial known zero neighborhood ensures that $u$ vanishes near $x_0$, exactly as required by [F2]. Local boundedness on the compact ball gives $M=\|B\|_{L^\infty(B_R(x_0))}<\infty$. [given, F1, F2, construct]

2.1 Set $X_s=\|r^{-\tau}u\|_2$, $\tau=s+1$. All weighted norms are finite since $u$ vanishes near the center. The estimate [F2] and the triangle inequality give $X_s\le(2/s)(\|r^{-\tau+2}Bu\|_2+\|r^{-\tau+2}e\|_2)$. On the support of $u$ one has $r^2|B|\le MR^2$, so the first norm is at most $MR^2X_s$. For every integer $s\ge\max\{1,4MR^2\}$ this term can be absorbed, giving $X_s\le(4/s)\|r^{-\tau+2}e\|_2$. Since $-\tau+2=1-s\le0$ and $e$ is supported where $r\ge R/2$, its norm is bounded by $(R/2)^{-\tau+2}\|e\|_2$. This absorption uses only the modulus of the complex function $B$. [F2, step 1.1, algebra]

3.1 Fix $0<\rho<R/2$. On $B_\rho(x_0)$ the cutoff is one and $r^\tau\le\rho^\tau$, hence $\|\psi\|_{L^2(B_\rho(x_0))}\le\rho^\tau X_s\le(4/s)(2\rho/R)^{s+1}(R/2)^2\|e\|_2$ for all integers $s$ from step 2.1. The cutoff and $e$ are fixed independently of $s$. Because $2\rho/R<1$, the right-hand side tends to zero as $s\to\infty$, proving $\psi=0$ almost everywhere on $B_\rho(x_0)$. Exhausting $B_{R/2}(x_0)$ by a countable sequence of such balls proves vanishing almost everywhere on $B_{R/2}(x_0)$. Thus any initially known zero neighborhood at a center expands to this ball for every admissible $R$, irrespective of the size of the initial neighborhood. [step 1.1, step 2.1, algebra]

4.1 Choose an initial point $x_0$ in the given nonempty zero open subset, and let $y\in\Omega$ be arbitrary. There is a finite polygonal path $\gamma:[0,1]\to\Omega$ from $x_0$ to $y$: the subset reachable from $x_0$ by such paths is relatively open, since a small ball around each reachable point permits an extra line segment; its complement is relatively open by the same ball argument, and connectedness forces the reachable subset to be all of $\Omega$. The compact image $K$ of $\gamma$ has a positive distance from $\mathbb R^3\setminus\Omega$ when that complement is nonempty; if $\Omega=\mathbb R^3$ choose any positive distance parameter. Choose a fixed $R>0$ smaller than this distance, so $\overline{B_R(z)}\subset\Omega$ for every $z\in K$. Uniform continuity of the finite polygonal path supplies a finite partition $0=t_0<\cdots<t_n=1$ with $|\gamma(t_{j+1})-\gamma(t_j)|<R/4$. [step 3.1, construct]

5.1 Apply step 3.1 at $\gamma(t_0)=x_0$ to establish vanishing on $B_{R/2}(x_0)$. Inductively, if vanishing is established on $B_{R/2}(\gamma(t_j))$, the next center $\gamma(t_{j+1})$ lies strictly inside this ball and therefore has a zero neighborhood. Step 4.1 with the same radius $R$ then establishes vanishing on $B_{R/2}(\gamma(t_{j+1}))$. Finitely many applications prove vanishing in a neighborhood of $y$. Thus the open union of zero neighborhoods is all of $\Omega$. To conclude a single almost-everywhere assertion on $\Omega$, use the countable base of rational balls: all rational balls contained in some such neighborhood cover $\Omega$, and $\psi$ vanishes almost everywhere on each of them. Their countable union has a null exceptional set. Only finite path constructions and countable approximation or null-set unions were used; no additional regularity, real-valuedness of $B$, or stronger choice hypothesis is required. [step 3.1, step 4.1, algebra] ∎
