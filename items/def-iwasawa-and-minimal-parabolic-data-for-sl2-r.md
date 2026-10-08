---
id: def-iwasawa-and-minimal-parabolic-data-for-sl2-r
kind: definition
title: Iwasawa and minimal-parabolic data for SL2(R)
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 0
deps:
  - ex-general-and-special-linear-lie-groups
  - ex-orthogonal-and-special-orthogonal-lie-groups
  - def-lie-group
  - def-real-and-complex-lie-groups
  - def-exponential-map-of-a-lie-group
  - def-one-parameter-subgroup-of-a-lie-group
  - thm-one-parameter-subgroups-are-exactly-exponentials
  - def-countable-choice
  - cor-normalized-haar-measure-on-a-compact-lie-group
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - def-modular-function-of-a-locally-compact-group
  - def-special-linear-lie-algebra-sl-two
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, printed pp. 6–7 (the PK decomposition and Definition 2.1; Kerr's parabolic modular character)"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, printed pp. 293–295 (the subgroups B, B+, K and Lemma 7.4.4)"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed. (author's PDF)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf"
      locator: "Chapter VI §4, printed pp. 371–375 (Iwasawa decomposition and its uniqueness)"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$G=\mathrm{SL}_2(\mathbb R)=\{g\in M_2(\mathbb R):\det g=1\}$, the embedded
matrix Lie group of [[ex-general-and-special-linear-lie-groups]], with the real
Lie-group conventions of [[def-lie-group]] and
[[def-real-and-complex-lie-groups]]. Set

$$K=\mathrm{SO}(2)=\left\{k_\theta=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}:\theta\in\mathbb R/2\pi\mathbb Z\right\}.$$

This is a closed embedded Lie subgroup ([[ex-orthogonal-and-special-orthogonal-lie-groups]]), isomorphic to the circle group $\mathbb T=\mathbb R/2\pi\mathbb Z$; the isomorphism with the quotient $\mathbb R/\mathbb Z$ of [[def-the-one-dimensional-torus-and-normalized-haar-integral]] is $[\theta]_{2\pi}\mapsto[\theta/(2\pi)]_1$. Write $dk$ for the normalized Haar probability measure on $K$ ([[cor-normalized-haar-measure-on-a-compact-lie-group]]). Then $k_{\theta+\pi}=-k_\theta$.

Let
$$A=\{a_t=\operatorname{diag}(e^{t/2},e^{-t/2}):t\in\mathbb R\},\qquad N=\{n_x=\begin{pmatrix}1&x\\0&1\end{pmatrix}:x\in\mathbb R\},\qquad M=\{\pm I\}.$$
In fact $M=Z(G)$: commuting with $a_1$ forces a central matrix to be diagonal, and commuting with $n_1$ forces its diagonal entries to agree; determinant one then gives precisely $I$ and $-I$.

The coordinates $a_t\leftrightarrow t$ and $n_x\leftrightarrow x$ identify $A$ and $N$ with the additive group $\mathbb R$; explicitly, $a_ta_s=a_{t+s}$, $n_xn_y=n_{x+y}$, and $a_tn_xa_{-t}=n_{e^t x}$. The standard minimal parabolic subgroup is
$$P=MAN=\left\{\begin{pmatrix}u&b\\0&u^{-1}\end{pmatrix}:u\in\mathbb R^\times,\ b\in\mathbb R\right\},$$
the closed stabilizer of the line $\mathbb R(1,0)$ in the standard action on $\mathbb R^2$: preservation of that line is exactly the vanishing of the lower-left entry. The factorization is unique: for the displayed matrix, set $m=\operatorname{sgn}(u)I$, $t=2\log|u|$, and $x=b/u$; then $p=ma_tn_x$, and the diagonal and top-right entries force these same values from any such factorization. The displayed coordinates identify $P$ with $\mathbb R^\times\times\mathbb R$, so its identity component is the $u>0$ component $AN$. A unipotent element has both eigenvalues equal to $1$, forcing $u=1$; hence the unipotent elements of $P$ are exactly $N$, which is connected and normal. Thus $N$ is the unipotent radical. Directly, $K\cap P=\{\pm I\}=M$.

Put $H=\operatorname{diag}(1,-1)$, $e_0=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $\mathfrak a=\mathbb RH$, and $\mathfrak n=\mathbb Re_0$. By [[ex-general-and-special-linear-lie-groups]], the Lie algebra of this real $G$ is the traceless real matrices; $H,e_0$ lie in it, and direct multiplication gives $[H,e_0]=2e_0$, the same matrix relation used in [[def-special-linear-lie-algebra-sl-two]]. The explicit matrix exponential gives $a_t=\exp_G(tH/2)$ and $n_x=\exp_G(xe_0)$, so their coordinate maps are one-parameter subgroups ([[def-exponential-map-of-a-lie-group]], [[def-one-parameter-subgroup-of-a-lie-group]], [[thm-one-parameter-subgroups-are-exactly-exponentials]]). In particular, $\operatorname{Ad}(a_t)e_0=e^t e_0$.

For $p\in P$, define the **parabolic modular character** by
$$\delta_P(p)=\left|\det\!\left(\operatorname{Ad}(p)|_{\mathfrak n}\right)\right|.$$
Then $\delta_P|_{MN}=1$ and $\delta_P(a_t)=e^t$. To distinguish this character from the group modular function of [[def-modular-function-of-a-locally-compact-group]], write the latter as $\Delta_P$: with the convention $\int_P f(xp^{-1})\,d\mu(x)=\Delta_P(p)\int_P f\,d\mu$, one has $\Delta_P=\delta_P^{-1}$ and hence $\Delta_P(a_t)=e^{-t}$. Indeed, on $AN$ the coordinates $a_tn_x$ have left Haar measure $dt\,dx$; right translation by $a_{-s}$ is $(t,x)\mapsto(t-s,e^s x)$ and scales the integral by $e^{-s}$. Kerr denotes the parabolic modular character $\delta_P$ by $\Delta_P$.

For $\varepsilon\in\{0,1\}$ and $\nu\in\mathbb C$, let $\sigma_\varepsilon(\pm I)=(\pm1)^\varepsilon$, extend it trivially over $AN$, and define the character $e^\nu$ to be trivial on $MN$ and satisfy $e^\nu(a_t)=e^{\nu t/2}$. Set $|\alpha(a_t)|=e^{t/2}$. The normalized inducing character is $\sigma_\varepsilon\delta_P^{1/2}e^\nu$; on $A$ it is
$$|\alpha(a_t)|^{1+\nu}=e^{(1+\nu)t/2}=\delta_P(a_t)^{1/2}e^\nu(a_t).$$

All principal-series parameters on this page use the letter $\nu$ with this normalization, and the half-modular shift is applied exactly once. AC is used to obtain $dk$ through [[cor-normalized-haar-measure-on-a-compact-lie-group]]. A countable family of nonempty sets is a family to which AC applies, so AC supplies the $\mathrm{AC}_\omega$ hypothesis stated in [[def-countable-choice]] and required by the cited exponential-map and one-parameter-subgroup results. The groups and coordinates above are otherwise explicit.
