---
id: "thm-local-structure-of-distributions-as-derivatives-of-continuous-functions"
kind: "theorem"
title: "Local structure of distributions as derivatives of continuous functions"
deps: ["thm-local-finite-order-characterization-of-distributions", "lem-compactly-supported-distributions-extend-to-smooth-functions", "lem-test-function-cutoffs-and-euclidean-localization", "thm-zorn", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities", "def-regular-distribution-from-a-locally-integrable-function", "def-distributional-derivative", "def-axiom-of-choice", "def-multiplication-of-a-distribution-by-a-smooth-function", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      title: "Razvan Gelca, Functional Analysis"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume the Axiom of Choice. For $u\in\mathcal D'(\Omega)$ and compact $K\subseteq\Omega$, there are a continuous complex function $f$ on $\Omega$ and a multi-index $\alpha$ with $u(\varphi)=(\partial^\alpha u_f)(\varphi)$ for all $\varphi\in\mathcal D_K$. More precisely, if the compact localization in the proof has order bound $m$, one can take $\alpha=(m+2,\ldots,m+2)$. In particular a global order bound $m$ permits this same exponent for every compact localization. AC is used for the explicit Zorn extension and the bounded-density supplier (and covers the countable-choice integration interface).

## Facts & Assumptions

[F1] Distributions have compactwise finite-order estimates ([[thm-local-finite-order-characterization-of-distributions]]).

[F2] Compactly supported distributions act continuously on all smooth functions by cutoff extension ([[lem-compactly-supported-distributions-extend-to-smooth-functions]]).

[F3] Smooth compact cutoffs exist ([[lem-test-function-cutoffs-and-euclidean-localization]]), and smooth multiplication acts by test multiplication ([[def-multiplication-of-a-distribution-by-a-smooth-function]]).

[F4] Under AC, a nonempty poset whose chains have upper bounds has a maximal element ([[thm-zorn]]).

[F5] Absolutely integrable complex functions admit iterated integration in either order on sigma-finite products ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] Under AC, bounded complex $L^1$ functionals on finite measure spaces have essentially bounded densities for the bilinear integral ([[lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities]]).

[F7] Regular distributions and signed distribution derivatives use the bilinear conventions of [[def-regular-distribution-from-a-locally-integrable-function]] and [[def-distributional-derivative]].

[F8] AC is assumed as in [[def-axiom-of-choice]]; applying it to countable families also supplies Countable Choice. The complex Lebesgue FTC and integration by parts on finite intervals are available under that subcase ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

## Proof

**Given:** AC, $u$, and compact $K\subseteq\Omega$.

1.1 Take $\chi\in\mathcal D(\Omega)$ equal to one near $K$ using F3. The distribution $v=\chi u$ has compact support inside $\operatorname{supp}\chi$: it vanishes on the complement by its defining pairing. F2 therefore lets it act on restrictions of all smooth functions on $\mathbb R^n$; denote that action by $w(\psi)=u(\chi\psi|_\Omega)$. F1 on $\operatorname{supp}\chi$ and the finite product rule give $|w(\psi)|\le A\max_{|\gamma|\le m}\sup_{\operatorname{supp}\chi}|\partial^\gamma\psi|$ for some $A,m$. If $u$ has global order at most $m$, its local estimate has that same exponent and multiplication does not raise it. Choose a nondegenerate open box $B=\prod_i(a_i,b_i)$ containing $\operatorname{supp}\chi$ compactly in its interior. It need not lie in $\Omega$. [given, F1, F2, F3]

2.1 Put $k=(m+1,\ldots,m+1)$ and $T=\partial^k$ on $\mathcal D(B)$. For $|\gamma|\le m$ let $q_i=k_i-\gamma_i\ge1$. Repeatedly integrating in each coordinate from $a_i$ gives [step 1.1, F5, F8]
$$\partial^\gamma\psi(x)=\int_{a_1}^{x_1}\cdots\int_{a_n}^{x_n}\prod_i\frac{(x_i-t_i)^{q_i-1}}{(q_i-1)!}\ T\psi(t)\,dt.$$
All lower endpoint derivatives vanish because $\psi$ is compactly supported in $B$. The formula follows from the FTC in F8 by $q_i$ successive integrations; F5 changes the repeated integral over each simplex to the displayed polynomial kernel. Its kernel is bounded on the box by a finite constant depending on $B,\gamma,m$. Hence $p_m(\psi)\le C_{B,m}\|T\psi\|_{L^1(B)}$. This also proves injectivity of $T$ as a map to $L^1$ classes: if $T\psi=0$ almost everywhere, all displayed integrals vanish, including the one for $\psi$. Thus on the complex subspace $E=T(\mathcal D(B))\subseteq L^1(B;\mathbb C)$, $\ell(T\psi)=w(\psi)$ is well-defined and has bound $|\ell(z)|\le M\|z\|_1$, $M=AC_{B,m}$. [step 1.1, F5, F8]

3.1 To extend this functional, regard $L^1(B;\mathbb C)$ as a real normed space and set $p(z)=M\|z\|_1$. Consider all real-linear extensions of $\operatorname{Re}\ell$ from the underlying real subspace $E$ to real subspaces, dominated above by $p$, ordered by extension. This is a set of graphs; it is nonempty, since the original real part is dominated. The union of a nonempty chain is a well-defined real-linear functional on the union subspace, still dominated by $p$; the empty chain has the original functional as an upper bound. F4 and F8 give a maximal such extension $h$ on a domain $D$. [step 2.1, F4, F8]

4.1 If $z\notin D$, define [step 3.1, algebra]
$$L_z=\sup_{d\in D}\bigl(h(d)-p(d-z)\bigr),\qquad U_z=\inf_{d\in D}\bigl(p(d+z)-h(d)\bigr).$$
For $d,e\in D$, $h(d)+h(e)=h(d+e)\le p(d+e)\le p(d-z)+p(e+z)$, so every lower candidate is at most every upper candidate. The choices $d=0$ show $-p(-z)\le L_z\le U_z\le p(z)$, so these are finite and $c=L_z$ belongs to the interval. Define $h'(d+tz)=h(d)+tc$. The decomposition is unique. For $t>0$ the upper bound on $c$ applied to $d/t$ gives domination by $p(d+tz)$; for $t<0$ the lower bound applied to $d/(-t)$ gives the same, and $t=0$ is the old bound. Thus $h'$ contradicts maximality. Consequently $D=L^1(B;\mathbb C)$. [step 3.1, algebra]

5.1 Set $\Lambda(z)=h(z)-ih(iz)$. Real linearity and $\Lambda(iz)=i\Lambda(z)$ make it complex-linear. On $E$ it equals $\ell$ since $\operatorname{Re}\ell(iz)=-\operatorname{Im}\ell(z)$. If $\Lambda(z)\ne0$, put $\omega=\overline{\Lambda(z)}/|\Lambda(z)|$. Then $|\Lambda(z)|=\operatorname{Re}\Lambda(\omega z)=h(\omega z)\le M\|z\|_1$; the zero case has the same bound. F6 on the finite Borel Lebesgue measure of $B$ gives a bounded Borel representative $b$, after setting its exceptional null values to zero, with $w(\psi)=\int_B b\,T\psi$. [step 4.1, F6, algebra]

6.1 Extend $b$ by zero outside $B$ and define $G(x)=\int_{\{t_i\le x_i\ \forall i\}}b(t)\,dt$. It is continuous on all of $\mathbb R^n$: for $x,x'$, the symmetric difference of the two lower orthants intersected with $B$ lies in the union of coordinate slabs of widths at most $|x_i-x_i'|$. Thus $|G(x)-G(x')|\le\|b\|_\infty\sum_i|x_i-x_i'|\prod_{j\ne i}(b_j-a_j)$. For a test $\zeta$ on $\mathbb R^n$, F5 swaps $t,x$ in the absolutely integrable function $b(t)1_{t_i\le x_i\ \forall i}\partial_1\cdots\partial_n\zeta(x)$: $t$ lies in bounded $B$ and $x$ in the compact derivative support. F8 in each $x_i$ gives the inner integral $(-1)^n\zeta(t)$, because all upper endpoint values vanish. Therefore $\int G\,\partial_1\cdots\partial_n\zeta=(-1)^n\int b\zeta$. [step 5.1, F5, F8]

7.1 Apply step 6.1 to $\zeta=T\psi$, $\psi\in\mathcal D(B)$. Then $w(\psi)=(-1)^n\int G\,\partial^{k+\mathbf1}\psi$. Put $f=(-1)^{|k|}G|_\Omega$ and $\alpha=k+\mathbf1$. Since $|\alpha|=|k|+n$, F7 gives $\partial^\alpha u_f(\varphi)=(-1)^n\int G\,\partial^\alpha\varphi=w(\varphi)=u(\varphi)$ for every $\varphi\in\mathcal D_K$. The function $f$ is continuous and locally integrable. Empty $K$ has only the zero test, so $f=0,\alpha=0$ suffices there; zero bounds in the construction give zero functionals and cause no division by a norm. This proves the claim and the stated exponent control. $\square$ [step 6.1, step 5.1, step 1.1, F7]
