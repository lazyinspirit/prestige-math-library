---
id: "ex-distributional-laplacian-of-the-newtonian-kernel"
kind: "example"
title: "Distributional laplacian of the newtonian kernel"
deps: ["def-distributional-derivative", "def-dirac-delta-and-its-derivatives", "def-regular-distribution-from-a-locally-integrable-function", "cor-greens-second-identity-for-glued-elementary-solid-regions", "thm-dominated-convergence", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands", "thm-lebesgue-measure-is-a-complete-measure", "def-countable-choice", "def-elementary-solid-region", "def-simple-solid-region-in-a-coordinate-direction", "def-adapted-outward-boundary-presentation-of-a-simple-solid-region", "def-admissible-regular-parametrized-surface-patch", "def-finitely-patched-regular-surface-and-integrals", "cor-disc-jordan-content-is-pi-r-squared"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Assume Countable Choice for Lebesgue integration. Set $N(x)=-1/(4\pi|x|)$ for $x\in\mathbb R^3\setminus\{0\}$ and assign any finite value at zero. Then $N\in L^1_{\mathrm{loc}}(\mathbb R^3)$ and $\Delta u_N=\delta_0$.

## Facts & Assumptions

[F1] Regular distributions integrate locally integrable functions; second distribution derivatives transpose with positive sign, and Dirac evaluates at zero ([[def-regular-distribution-from-a-locally-integrable-function]], [[def-distributional-derivative]], [[def-dirac-delta-and-its-derivatives]]).

[F2] Green's second identity applies to two real $C^2$ functions on a neighborhood of an elementary solid; complex tests are handled by real and imaginary parts ([[cor-greens-second-identity-for-glued-elementary-solid-regions]]).

[F3] Elementary solids require simple descriptions in all three coordinate directions and one adapted compatible regular patch presentation ([[def-elementary-solid-region]], [[def-simple-solid-region-in-a-coordinate-direction]], [[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]], [[def-admissible-regular-parametrized-surface-patch]], [[def-finitely-patched-regular-surface-and-integrals]]). Closed discs are Jordan measurable with content $\pi R^2$ ([[cor-disc-jordan-content-is-pi-r-squared]]).

[F4] Under Countable Choice, bounded Borel Riemann integrands on boxes have the same Lebesgue integral ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]). Apply this to zero extensions from balls, whose boundary has Jordan content zero by the simple descriptions in F3.

[F5] Dominated convergence applies to integrable complex functions ([[thm-dominated-convergence]]).

[F6] Countable Choice supplies Lebesgue measure and box volumes ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]]).

## Proof

**Given:** $N$ and Countable Choice. We use smooth radial regularization so Green's identity is applied only on the proved elementary ball, without assuming a presentation of a punctured solid.

1.1 For $a>0$, divide $0<|x|\le a$ into shells $2^{-j-1}a<|x|\le2^{-j}a$, $j\ge0$. Each lies in a box of side $2^{1-j}a$, and $1/|x|\le2^{j+1}/a$ there. F6 bounds the integral of $1/|x|$ by $\sum_{j\ge0}16a^2 2^{-2j}<\infty$. A singleton is null since it lies in boxes of arbitrarily small volume. Thus $N$ is locally integrable and its value at zero is immaterial. Direct differentiation gives $\partial_iN=x_i/(4\pi|x|^3)$ and $\Delta N=(3|x|^{-3}-3|x|^2|x|^{-5})/(4\pi)=0$ off zero. [given, F1, F6]

2.1 For $\varepsilon>0$ put $N_\varepsilon(x)=-(4\pi)^{-1}(|x|^2+\varepsilon^2)^{-1/2}$. This is smooth everywhere, and coordinate differentiation gives [step 1.1, algebra]
$$h_\varepsilon(x):=\Delta N_\varepsilon(x)=\frac{3\varepsilon^2}{4\pi(|x|^2+\varepsilon^2)^{5/2}}\ge0.$$
For $R>0$ we supply the ball presentation required by F3. In each coordinate direction its base is the closed radius-$R$ disc and its lower and upper functions are $-\sqrt{R^2-|t|^2}$ and $\sqrt{R^2-|t|^2}$, continuous and strictly ordered on the interior. These descriptions also prove that the ball is Jordan measurable. Use the parametrization $P(\phi,\theta)=R(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$ on the eight rectangles cut at $\phi=\pi/2$ and $\theta=\pi/2,\pi,3\pi/2$. It is smooth on neighborhoods of the rectangles and $P_\phi\times P_\theta=R\sin\phi\,P$, nonzero on each interior. An interior image has three nonzero coordinates; its third coordinate uniquely determines $\phi\in(0,\pi)$ and its first two uniquely determine the azimuth in its quadrant, so it shares its image with no other point of that closed rectangle. Distinct patches overlap only over rectangle edges, whose preimages have content zero. For each direction sort the four octants with positive coordinate as upper and the four with negative coordinate as lower, with no lateral patches. The corresponding area-vector coordinate has the required strict sign, and projected interiors are the four disjoint open quarter discs. Their omissions are the two diameters and boundary circle, all content zero: diameters admit arbitrarily thin rectangle covers; the circle lies in annuli of content $\pi((R+h)^2-(R-h)^2)\to0$ by F3. Thus all adaptation clauses hold for the same eight-patch list. This proves the ball is elementary using only the definitions, not a B-page supplier. F2 on this ball $B_R$ with functions $1,N_\varepsilon$ gives $\int_{B_R}h_\varepsilon=\int_{\partial B_R}\partial_nN_\varepsilon$. The supplied parametrization $R(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$ has area density $R^2\sin\phi$, by direct cross product. Its total area is $R^2\int_0^{2\pi}\int_0^\pi\sin\phi\,d\phi\,d\theta=4\pi R^2$, and its outward normal is $x/R$. Thus [step 1.1, F2, F3, F4]
$$\int_{B_R}h_\varepsilon=\frac{R^3}{(R^2+\varepsilon^2)^{3/2}}\longrightarrow1.$$
F4 identifies these compact-region Riemann integrals with Lebesgue integrals. All Green functions are $C^2$ on a neighborhood of the entire closed ball. [step 1.1, F2, F3, F4]

3.1 Fix a test $\psi$ supported in the interior of $B_R$. F2 for $N_\varepsilon,\psi$ has zero boundary terms since $\psi$ and its derivatives vanish near the sphere. Hence $\int N_\varepsilon\Delta\psi=\int_{B_R}h_\varepsilon\psi$. On the left, $|N_\varepsilon|\le1/(4\pi|x|)$ off zero, an integrable bound on $B_R$ by step 1.1, and $N_\varepsilon\to N$ almost everywhere. F5 gives convergence to $\int N\Delta\psi$. [step 2.1, step 1.1, F2, F4, F5]

4.1 For $0<\delta<R$, the difference between $\int_{B_R}h_\varepsilon\psi$ and $\psi(0)\int_{B_R}h_\varepsilon$ is bounded by $\sup_{|x|\le\delta}|\psi(x)-\psi(0)|$ times a mass at most one, plus $2\|\psi\|_\infty\int_{B_R\setminus B_\delta}h_\varepsilon$. On the latter region, $h_\varepsilon\le3\varepsilon^2/(4\pi\delta^5)$, so the second term tends to zero by finite box volume. First choose $\delta$ using continuity, then let $\varepsilon\to0$. Together with step 2.1 this proves $\int_{B_R}h_\varepsilon\psi\to\psi(0)$. Step 3.1 and F1 now give $(\Delta u_N)(\psi)=\int N\Delta\psi=\psi(0)$. This proves the identity with its positive sign. The zero test gives zero, and no value of the singular formula at zero is used. $\square$ [step 3.1, step 2.1, F1, F6]
