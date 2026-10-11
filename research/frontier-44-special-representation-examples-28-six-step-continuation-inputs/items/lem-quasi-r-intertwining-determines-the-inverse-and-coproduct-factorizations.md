---
id: lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations
kind: lemma
title: "The quasi-$R$ intertwiner determines its inverse and the coproduct factorizations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-root-height-completion-for-weightwise-quasi-r-intertwiners, lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite, lem-lusztig-and-kashiwara-normalizations-match-by-root-color, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra, thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]
justified_by: []
aliases: []
landmark: false
dependency_level: 13
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Antoine Lacabanne, Drinfeld Double of Quantum Groups, Tilting Modules and Z-Modular Data Associated to Complex Reflection Groups, arXiv:1807.00770v2"
      url: "https://arxiv.org/pdf/1807.00770v2"
      locator: "Lemma 1.15 with its proof, printed p. 9; Lemma 1.16, printed p. 10; Proposition 1.17, printed pp. 10–11; §1.7 for the completion in which the identities hold."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§4.1.3, printed p.36(PDF45), inverse/bar proof; §§4.2.2–4.2.4, printed pp.37–39(PDF46–48), complete paired coproduct and cocycle proofs; exact indices visually checked onPDF46."
---

## Statement

In the same positive-first/negative-second completion $\widehat C$ of [[def-root-height-completion-for-weightwise-quasi-r-intertwiners]], let $\Theta=\sum_\nu\Theta_\nu$ be the unique normalized bar-coproduct intertwiner of [[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]]. Then:

(i) $\Theta^{-1}=\overline\Theta=(\psi\otimes\psi)(\Theta)$, the inverse being taken in the root-height convolution algebra of $\widehat C$ and not switching the positive and negative tensor order;

(ii) for every $\nu$ the exact threefold identities hold:
$$(\Delta\otimes\mathrm{id})\Theta_\nu=\sum_{\gamma+\eta=\nu}(\Theta_\gamma)_{23}(1\otimes K_{-\eta}\otimes1)(\Theta_\eta)_{13},$$
$$(\mathrm{id}\otimes\Delta)\Theta_\nu=\sum_{\gamma+\eta=\nu}(\Theta_\gamma)_{12}(1\otimes K_\eta\otimes1)(\Theta_\eta)_{13},$$
with subscripts denoting tensor positions and $\Theta_{\nu'}=0$ when $\nu'\notin Q_+$;

(iii) the two normalized tensor-bar compositions satisfy the field cocycle identity
$$((\Delta\otimes\mathrm{id})\Theta)\Theta_{12}=((\mathrm{id}\otimes\Delta)\Theta)\Theta_{23},$$
coefficientwise in the transported source completion and on every vector for which the iterated actions are finite;

(iv) the bar-coproduct counterpart needed for the cocycle is
$$(\mathrm{id}\otimes\overline\Delta)\Theta_\nu=\sum_{\gamma+\eta=\nu}(\Theta_\gamma)_{13}(1\otimes K_{-\gamma}\otimes1)(\Theta_\eta)_{12}.$$

Removing the normalization $\Theta_0=1$ permits arbitrary scalar multiples of the same linear intertwiner equation, so normalization is essential for uniqueness; no integrality of coefficients and no uncontrolled infinite evaluation is asserted.

## Facts & Assumptions

**Given:** The completed tensor square $\widehat C$ with its convolution product and its coefficientwise [F]-transport from the source completion of [[def-root-height-completion-for-weightwise-quasi-r-intertwiners]]; the normalized family $\Theta$ with its uniqueness and recursions ([[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]]); the bar involution $\psi$ and $\overline\Delta(u)=(\psi\otimes\psi)\Delta(\psi(u))$ ([[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]], [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]); and the dual-basis components of $\Theta$ ([[lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite]]).

[F1] Uniqueness and equations ([[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]]): $\Theta$ is the unique family in $\widehat C$ with $\Theta_0=1$ and $\Delta(u)\Theta=\Theta\overline\Delta(u)$ for all $u$, and its components are toral weight zero.

[F2] Involution calculus ([[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]], [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]): $\psi$ is an algebra involution with $\psi(q)=q^{-1}$, $\psi(E_i)=E_i$, $\psi(F_i)=F_i$, $\psi(K_h)=K_h^{-1}$; $(\psi\otimes\psi)\circ\Delta=\overline\Delta\circ\psi$ and $(\psi\otimes\psi)\circ\overline\Delta=\Delta\circ\psi$; the componentwise extension $B(a)_\nu=(\psi\otimes\psi)(a_\nu)$ is an algebra automorphism of $\widehat C$ with $B(\Theta)=\overline\Theta$ and $B^2=\mathrm{id}$.

[F3] Cohesion of the convolution algebra ([[def-root-height-completion-for-weightwise-quasi-r-intertwiners]], [[lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite]]): $\widehat C$ is a complete filtered algebra for the positive root-height filtration, so every family with component $1$ in degree $0$ is invertible, and the inverse is computed recursively from $\Theta_0=1$; when $\Theta$ satisfies the linear equation $\Delta(u)X=X\overline\Delta(u)$, the inverse computations below are finite in each root degree and involve only finitely many coefficients in each degree.

[F4] Source computation (Lusztig, Introduction to Quantum Groups, §4.1.3 and §§4.2.2–4.2.4, printed pp. 36–39; [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]] for the convention transport): the printed proofs expand the twisted half coproduct and its bar version, pair against homogeneous basis tensors, and use the multiplication and comultiplication adjunction of the half form together with the bar-twisted coproduct coefficient relation; tensor reversal and $K_L\mapsto K_K^{-1}$ under $v=q^{-1}$ convert the source identities into exactly the two displayed orders and middle $K$-factors, and §4.2.3 applied to $\Theta\overline\Theta=1$ gives the bar-coproduct counterpart. The transport of [F2] identifies the source form with the local normalization of $\Theta$.

## Proof

**Proof technique:** direct.

1.1 **The barred equation.** Bar the intertwining equation with $B=\psi\otimes\psi$: from $\Delta(u)\Theta=\Theta\overline\Delta(u)$ and [F2] one gets $\overline\Delta(\psi(u))\,\overline\Theta=\overline\Theta\,\Delta(\psi(u))$ for every $u$, i.e. after replacing $u$ by $\psi(u)$, $\overline\Delta(u)\overline\Theta=\overline\Theta\Delta(u)$. Inverting the original equation in the convolution algebra [F3] gives $\Theta^{-1}\Delta(u)=\overline\Delta(u)\Theta^{-1}$; applying the algebra automorphism $B$ and using [F2] turns this into $\Delta(\psi(u))B(\Theta^{-1})=B(\Theta^{-1})\overline\Delta(\psi(u))$. [F1, F2, F3]

1.2 **The two coproduct factorizations.** Both identities of (ii) are verified coefficientwise in the transported source completion by the printed computation of [F4]: expand $\Theta$ in homogeneous $D$-dual bases, expand each coevaluation $\Theta_\gamma,\Theta_\eta$, and pair the three tensor slots against arbitrary homogeneous test tensors. The multiplication and comultiplication adjunctions of the half form identify the paired coefficients with those of the products $b_1b_2$ appearing in the twisted coproduct $r(b)=\sum f(b,b_1,b_2)b_1\otimes b_2$, and the bar-twisted coefficient relation of the source reverses their order with the precise root $q$-power; toral commutation moves that power to the middle tensor position, producing $K_{-\eta}$ for $\Delta\otimes\mathrm{id}$ and $K_\eta$ for $\mathrm{id}\otimes\Delta$. The threefold tensor reversal and $K_L\mapsto K_K^{-1}$ of [F2] and [F4] convert the source statements into exactly the displayed orders and indices. The computation is finite in each degree, and the degree-$\alpha_i$ instances read $(\Delta\otimes\mathrm{id})\Theta_{\alpha_i}=(q_i-q_i^{-1})\bigl(\Delta(E_i)\otimes F_i\bigr)$ and $(\mathrm{id}\otimes\Delta)\Theta_{\alpha_i}=(q_i-q_i^{-1})\bigl(E_i\otimes\Delta(F_i)\bigr)$, which fix the index conventions and match the two recursions of [F1]. [F1, F2, F3, F4]

2.1 **Identification of the inverse.** Put $Y:=B(\Theta^{-1})=\overline{\Theta^{-1}}$. Step 1.1 shows $\Delta(v)Y=Y\overline\Delta(v)$ for every $v$, and $Y_0=B(\Theta_0)=1$; by the uniqueness clause of [F1], $Y=\Theta$, hence $\Theta^{-1}=B(\Theta)=\overline\Theta$. The inverse is taken in the same positive-first/negative-second completion, because the convolution algebra of [F3] is closed under inversion and $B$ is an automorphism of it; no opposite tensor completion is used. [F1, F2, F3, step 1.1]

2.2 **Rank-one all-degree check.** When $I=\{i\}$, the divided-power coproduct in the library convention is $\Delta(E_i^{(n)})=\sum_{\gamma+\eta=n}q_i^{\gamma\eta}E_i^{(\eta)}\otimes K_i^{-\eta}E_i^{(\gamma)}$, and [F4] with $\binom{n}{\gamma}_iq^{\gamma\eta}[\![\gamma]\!][\![\eta]\!]=[\![n]\!]q^{\gamma\eta}$ shows that the right-hand side of the first identity of (ii) equals $(q_i-q_i^{-1})^n[\![n]\!]\sum_{\gamma+\eta=n}q_i^{\gamma\eta}E_i^{(\eta)}\otimes K_i^{-\eta}E_i^{(\gamma)}\otimes F_i^{(n)}$, exactly the left-hand side $(q_i-q_i^{-1})^n[\![n]\!]\Delta(E_i^{(n)})\otimes F_i^{(n)}$; here $[\![m]\!]=q_i^{m(m-1)/2}[m]_{q_i}!=[m]_{q_i^2}!$ is the geometric factorial of [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]]. The same computation with $\Delta(F_i^{(n)})=\sum_{\gamma+\eta=n}q_i^{\gamma\eta}F_i^{(\gamma)}\otimes K_i^{\gamma}F_i^{(\eta)}$ checks the second identity. [F4, step 1.2]

3.1 **The bar-coproduct counterpart.** The product $\Theta\overline\Theta=1$ of step 2.1 is the source hypothesis of the printed bar-coproduct computation of [F4]; expanding it with the coevaluation expansion and using the adjunction of the form in the two lower tensor positions, exactly as in step 1.2 but with the roles of $\Delta$ and $\overline\Delta$ interchanged, gives the displayed identity $(\mathrm{id}\otimes\overline\Delta)\Theta_\nu=\sum_{\gamma+\eta=\nu}(\Theta_\gamma)_{13}(1\otimes K_{-\gamma}\otimes1)(\Theta_\eta)_{12}$. This is the precise bar-coproduct coefficient relation needed below. [F4, step 2.1]

4.1 **The cocycle identity.** Start from the left-hand side $((\Delta\otimes\mathrm{id})\Theta)\Theta_{12}$ and expand by the first identity of (ii): it becomes $\sum_{\gamma+\eta=\nu}(\Theta_\gamma)_{23}(1\otimes K_{-\eta}\otimes1)(\Theta_\eta)_{13}\,\Theta_{12}$. For the right-hand side $((\mathrm{id}\otimes\Delta)\Theta)\Theta_{23}$, apply the intertwining equation of [F1] in the last two tensor positions to replace $\Theta_{23}$ by the bar-conjugated expansion, and expand the resulting $(\mathrm{id}\otimes\overline\Delta)\Theta$ by step 3.1: the right-hand side becomes $\sum_{\gamma+\eta=\nu}(\Theta_\gamma)_{13}(1\otimes K_{-\gamma}\otimes1)(\Theta_\eta)_{12}\,\Theta_{23}$. Rearranging the two sums by the inner variable and using that a middle-position toral factor commutes with the outer $(\Theta_\bullet)_{13}$ or $(\Theta_\bullet)_{23}$ coefficient, both sides equal $\sum_{a+b+c=\nu}(\Theta_a)_{23}\,\Theta_{b\,13}\,K_{-b}^{(2)}\,(\Theta_c)_{12}$; the sums are finite in every fixed outer root degree because $b+c$ and $a+b$ are fixed, so no infinite rearrangement is performed. [F1, step 1.2, step 3.1]

5.1 **Conclusion and normalization.** Steps 1.1–1.2 prove (i); step 1.2 proves (ii) with the degree-$\alpha_i$ instances and step 2.2 verifies it independently in rank one to all degrees; step 3.1 proves (iv); step 4.1 proves the cocycle identity (iii). The equation $\Delta(u)X=X\overline\Delta(u)$ is homogeneous and linear in $X$, so every nonzero scalar multiple of $\Theta$ satisfies it with $\Theta_0$ scaled equally, and only the normalization $\Theta_0=1$ selects $\Theta$; all computations are at the field level and involve no integrality, while the finite-support hypotheses of [F3] are checked before any completed series is evaluated. [step 2.1, step 1.2, step 2.2, step 3.1, step 4.1] ∎
