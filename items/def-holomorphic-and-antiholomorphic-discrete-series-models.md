---
id: def-holomorphic-and-antiholomorphic-discrete-series-models
kind: definition
title: Holomorphic and antiholomorphic discrete-series models
status: published
origin: pipeline
deps:
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - def-complex-differentiability-holomorphic-and-entire
  - def-complex-integer-powers
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points
  - def-axiom-of-choice
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is inherited through the K/Haar and principal-series suppliers and supplies AC_omega for the nonnegative C1 change-of-variables theorem used in the norm calculations. The explicit maps and finite K-type identifications use no further choice."
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.16(1), Exercises 7.4.17–7.4.18, printed pp. 305–308 (holomorphic model, K-types, and antiholomorphic model)"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "Appendix I §7, Proposition 7.2 and its K-type argument, printed pp. 27–29"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathfrak H=\{z\in\mathbb C:\operatorname{Im}z>0\}$ and, for $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in G=\mathrm{SL}_2(\mathbb R)$, define $g\cdot z=(az+b)/(cz+d)$ and $j(g,z)=cz+d$. The verification below proves that these fractional maps preserve $\mathfrak H$, obey the group law, and have nonzero automorphy factors there. For an integer $n\ge2$ put
$$\mathcal H_n^+=\Big\{f:\mathfrak H\to\mathbb C\ \text{holomorphic}:\ \|f\|_n^2=\int_{\mathfrak H}|f(z)|^2y^{\,n-2}\,dx\,dy<\infty\Big\},\qquad y=\operatorname{Im}z,$$
and let $\mathcal H_n^-$ be the complex-conjugate space of antiholomorphic functions with the same norm. Define
$$\pi_n(g)f(z)=j(g^{-1},z)^{-n}f(g^{-1}\cdot z),\qquad \pi_n^-(g)f=\overline{\pi_n(g)\bar f};$$
the verification below proves these are group actions preserving the stated finite-norm spaces. For $j\ge0$, set
$$f_{n,j}(z)=(z-i)^j(z+i)^{-n-j}\in\mathcal H_n^+,\qquad \pi_n(k_\theta)f_{n,j}=e^{-i(n+2j)\theta}f_{n,j},$$
and set $\widetilde f_{n,j}=\overline{f_{n,j}}\in\mathcal H_n^-$, so that $\pi_n^-(k_\theta)\widetilde f_{n,j}=e^{i(n+2j)\theta}\widetilde f_{n,j}$. Let $V_n^-:=\operatorname{span}_{\mathbb C}\{f_{n,j}:j\ge0\}$ and $V_n^+:=\operatorname{span}_{\mathbb C}\{\widetilde f_{n,j}:j\ge0\}$. The models are denoted $D_n^-:=(\pi_n,\mathcal H_n^+)$ and $D_n^+:=(\pi_n^-,\mathcal H_n^-)$. For the parity $\varepsilon\equiv n\pmod2$, the displayed algebraic K-finite subspaces identify with $M^+_{-n}$ and $M^-_n$ in [[lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points]](b), at $\nu=n-1$.

## Facts & Assumptions
**Given:** AC, $n\in\mathbb Z$ with $n\ge2$, the fractional maps defined in the Statement, and the normed holomorphic and antiholomorphic spaces above.

[F1] Sums, products, quotients with nonzero denominator, and compositions obey the complex derivative rules; integer powers of a nonzero complex number are defined ([[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]], [[def-complex-integer-powers]], [[def-complex-differentiability-holomorphic-and-entire]]).

[F2] A $C^1$ diffeomorphism of open Euclidean sets changes variables for every nonnegative Lebesgue-measurable function ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F3] The fixed compact basis has $K=\mathrm{SO}(2)$ and $k_\theta=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}$ ([[def-k-finite-and-smooth-vectors-for-sl2-r]]); the extremal principal-series modules have the listed weights and derived coefficients ([[lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points]]).

[A1] AC supplies AC$_\omega$, required by [F2] ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-countable-choice]]).

## Verification

**Given:** The definitions and hypotheses in the Statement.

**Proof technique:** direct.

1.1 If $cz+d=0$ for $z\in\mathfrak H$, then $c=0$ would force $d=0$, contrary to $ad-bc=1$, while $c\ne0$ would make $z=-d/c$ real. Thus $j(g,z)\ne0$. Expanding numerator times the conjugate denominator gives $\operatorname{Im}((az+b)/(cz+d))=\operatorname{Im}z/|cz+d|^2>0$. The inverse fractional map is that of $g^{-1}$, and multiplication of matrices proves both the action law and $j(g_1g_2,z)=j(g_1,g_2\cdot z)j(g_2,z)$. The maps are holomorphic by [F1]. These identities prove the group law for $\pi_n$ and $\pi_n^-$ as stated, and their identity elements act as the identity. [F1, algebra]

1.2 For $z=x+iy\in\mathfrak H$, $|z+i|^2-|z-i|^2=4y>0$, so $w=(z-i)/(z+i)$ lies in $\mathbb D$. Solving gives the holomorphic inverse $z=i(1+w)/(1-w)$, and direct substitution gives $\operatorname{Im}z=(1-|w|^2)/|1-w|^2>0$; hence the Cayley map is a biholomorphism. The identities $z+i=2i/(1-w)$ and $|dz/dw|^2=4/|1-w|^4$ now give $\|f_{n,j}\|_n^2=2^{2-2n}\int_{\mathbb D}|w|^{2j}(1-|w|^2)^{n-2}\,du\,dv$. In polar coordinates, justified by [F2], this is $2^{2-2n}2\pi\int_0^1\rho^{2j+1}(1-\rho^2)^{n-2}\,d\rho\le 2^{2-2n}\pi<\infty$; the integral is positive because its integrand is positive on a nonempty open set. Thus every $f_{n,j}$ is a nonzero member of $\mathcal H_n^+$, and its complex conjugate belongs to $\mathcal H_n^-$. [F2, algebra]

2.1 Fix $g\in G$ and set $w=g^{-1}\cdot z$, so $z=g\cdot w$. The cocycle from step 1.1 gives $j(g^{-1},g\cdot w)=j(g,w)^{-1}$. Under $z=g\cdot w$, step 1.1 and the complex derivative $d(g\cdot w)/dw=j(g,w)^{-2}$ give $dx_z\,dy_z=|j(g,w)|^{-4}dx_w\,dy_w$. Thus the integrand $|\pi_n(g)f(z)|^2(\operatorname{Im}z)^{n-2}dx_z\,dy_z$ becomes $|f(w)|^2(\operatorname{Im}w)^{n-2}|j(g,w)|^{2n-2(n-2)-4}dx_w\,dy_w=|f(w)|^2(\operatorname{Im}w)^{n-2}dx_w\,dy_w$. By [F2] this change of variables holds for the nonnegative measurable integrand, even if the integral is infinite; hence $\|\pi_n(g)f\|_n=\|f\|_n$. The group law makes $\pi_n(g^{-1})$ its inverse. Complex conjugation gives the same norm-preserving action for $\pi_n^-$. [F1, F2, step 1.1, algebra]

2.2 For $k_\theta$ as in [F3], $k_{-\theta}\cdot z-i=e^{-i\theta}(z-i)/j(k_{-\theta},z)$ and $k_{-\theta}\cdot z+i=e^{i\theta}(z+i)/j(k_{-\theta},z)$, with $j(k_{-\theta},z)=\sin\theta\,z+\cos\theta$. Substitution into the inverse-action formula cancels the denominator powers and gives $\pi_n(k_\theta)f_{n,j}=e^{-i(n+2j)\theta}f_{n,j}$. Taking complex conjugates gives $\pi_n^-(k_\theta)\widetilde f_{n,j}=e^{i(n+2j)\theta}\widetilde f_{n,j}$; hence their algebraic spans are K-finite. [F1, F2, F3, step 1.2, algebra]

2.3 Each displayed vector is smooth for the group action. Under the Cayley map, $G$ acts by disk automorphisms; the inverse automorphy factor in the transformed coordinate is a smooth scalar times $(c_gw+d_g)^{-n}$, with $|d_g|>|c_g|$. Thus the transform of $f_{n,j}$, whose disk-coordinate function is $w^j$, is a rational function with denominator $(c_gw+d_g)^{n+j}$. Near any fixed $g_0$, smooth dependence of the disk-automorphism coefficients and the strict bound $|c_gw+d_g|\ge |d_g|-|c_g|>0$ uniformly for $|w|\le1$ show that every parameter derivative is uniformly bounded on the closed disk. The weighted measure $(1-|w|^2)^{n-2}du\,dv$ is finite for $n\ge2$, so the parameter difference quotients and all their derivatives converge in its $L^2$ norm by uniform convergence. Hence each orbit map is $C^\infty$ in the Hilbert norm. Complex conjugation gives the same conclusion for $\widetilde f_{n,j}$. [F2, F3, step 1.2, algebra]

3.1 For a real matrix $X=\begin{pmatrix}a&b\\c&-a\end{pmatrix}$, differentiating $\exp(-sX)$ at $s=0$ in the inverse-action formula gives the derived operator $L_Xf=(cz^2-2az-b)f'(z)+(-na+ncz)f(z)$ on these smooth vectors. Hence $L_H=-2z\partial_z-n$, $L_S=(z^2-1)\partial_z+nz$, and $L_{E_+}=\tfrac i2((z+i)^2\partial_z+n(z+i))$, $L_{E_-}=-\tfrac i2((z-i)^2\partial_z+n(z-i))$. Substitution of $f_{n,j}$ yields $L_{E_+}f_{n,j}=-j f_{n,j-1}$ (zero for $j=0$) and $L_{E_-}f_{n,j}=(n+j)f_{n,j+1}$. Complex conjugation gives $L_{E_+}\widetilde f_{n,j}=(n+j)\widetilde f_{n,j+1}$ and $L_{E_-}\widetilde f_{n,j}=-j\widetilde f_{n,j-1}$. [F2, F3, step 1.1, step 2.3, algebra]

4.1 Choose $\varepsilon\in\{0,1\}$ with $\varepsilon\equiv n\pmod 2$; then $\nu=n-1$ lies in $\mathcal W_\varepsilon$ of [[lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points]]. Its target module has $L_{E_+}f_{-n-2j}=-j f_{-n-2(j-1)}$ and $L_{E_-}f_{-n-2j}=(n+j)f_{-n-2(j+1)}$; these match step 3.1 under $f_{n,j}\mapsto f_{-n-2j}$. On the positive tail, $L_{E_+}f_{n+2j}=(n+j)f_{n+2(j+1)}$ and $L_{E_-}f_{n+2j}=-j f_{n+2(j-1)}$, matching the antiholomorphic formulas under $\widetilde f_{n,j}\mapsto f_{n+2j}$. The K-weights match by step 2.2, so these maps identify the displayed algebraic K-finite spans with $M^+_{-n}$ and $M^-_n$. [F3, step 2.2, step 2.3, step 3.1, algebra, A1] ∎
