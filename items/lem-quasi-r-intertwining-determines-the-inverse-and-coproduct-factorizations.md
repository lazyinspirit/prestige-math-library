---
id: lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations
kind: lemma
title: "The quasi-$R$ intertwiner determines its inverse and the coproduct factorizations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-root-height-completion-for-weightwise-quasi-r-intertwiners, lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite, lem-lusztig-and-kashiwara-normalizations-match-by-root-color, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra, thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique, lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree]
justified_by: []
aliases: []
landmark: false
dependency_level: 13
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
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

[F4] Pairing adjunctions are proved in [[lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree]]. Source computation (Lusztig, Introduction to Quantum Groups, §4.1.3 and §§4.2.2–4.2.4, printed pp. 36–39; [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]] for the convention transport): the printed proofs expand the twisted half coproduct and its bar version, pair against homogeneous basis tensors, and use the multiplication and comultiplication adjunction of the half form together with the bar-twisted coproduct coefficient relation; tensor reversal and $K_L\mapsto K_K^{-1}$ under $v=q^{-1}$ convert the source identities into exactly the two displayed orders and middle $K$-factors, and §4.2.3 applied to $\Theta\overline\Theta=1$ gives the bar-coproduct counterpart. The transport of [F2] identifies the source form with the local normalization of $\Theta$.

## Proof

**Proof technique:** direct.

1.1 **The barred equation.** Bar the intertwining equation with $B=\psi\otimes\psi$: from $\Delta(u)\Theta=\Theta\overline\Delta(u)$ and [F2] one gets $\overline\Delta(\psi(u))\,\overline\Theta=\overline\Theta\,\Delta(\psi(u))$ for every $u$, i.e. after replacing $u$ by $\psi(u)$, $\overline\Delta(u)\overline\Theta=\overline\Theta\Delta(u)$. Inverting the original equation in the convolution algebra [F3] gives $\Theta^{-1}\Delta(u)=\overline\Delta(u)\Theta^{-1}$; applying the algebra automorphism $B$ and using [F2] turns this into $\Delta(\psi(u))B(\Theta^{-1})=B(\Theta^{-1})\overline\Delta(\psi(u))$. [F1, F2, F3]

1.2 **The coproduct factorizations by duality.** Fix degrees $\gamma,\eta$. In the corresponding component of $\Delta x$, $x\in U^+[\gamma+\eta]$, remove the middle torus to write the coefficient tensor as $x_1\otimes K_{-\eta}x_2$, with $|x_1|=\eta$, $|x_2|=\gamma$. The Hopf adjunction for $D$ gives $\sum D(x_1,z)D(x_2,y)=q^{(\eta,\gamma)}D(x,yz)$ for $y\in U^-[-\gamma]$, $z\in U^-[-\eta]$: in $\Delta^{\mathrm{op}}x$ the toral pairing is $D(K_{-\eta},K_\gamma)=q^{-(\eta,\gamma)}$. Contract the first two root slots of $(\Delta\otimes\mathrm{id})\Theta$ with these two functionals; the result is $q^{(\eta,\gamma)}yz$. The proposed right side has the same contraction, since $x_2K_{-\eta}=q^{(\eta,\gamma)}K_{-\eta}x_2$ and the two coevaluations contract to $y,z$. This proves the first identity by perfectness. For the second, the degree component of $\Delta u$ for $u\in U^-[-\gamma-\eta]$ is $u_1K_\eta\otimes u_2$. The other Hopf adjunction gives $\sum D(a,u_1)D(b,u_2)=D(ab,u)$ for $a\in U^+[\gamma]$, $b\in U^+[\eta]$; the first pairing with $u_1K_\eta$ has no additional scalar, by the counit term of $\Delta^{\mathrm{op}}a$. Contracting the last two root slots on each proposed side therefore gives $ab$. This proves the second identity. All tests are in finite homogeneous components; the toral directions are retained, not discarded. [F1, F2, F4, algebra]

2.1 **Identification of the inverse.** Put $Y:=B(\Theta^{-1})=\overline{\Theta^{-1}}$. Step 1.1 shows $\Delta(v)Y=Y\overline\Delta(v)$ for every $v$, and $Y_0=B(\Theta_0)=1$; by the uniqueness clause of [F1], $Y=\Theta$, hence $\Theta^{-1}=B(\Theta)=\overline\Theta$. The inverse is taken in the same positive-first/negative-second completion, because the convolution algebra of [F3] is closed under inversion and $B$ is an automorphism of it; no opposite tensor completion is used. [F1, F2, F3, step 1.1]

2.2 **Rank-one check in every degree.** Put $t_n=[n]_{q_i^2}!=q_i^{n(n-1)/2}[n]_i!$. The Gaussian coproduct expansions are $\Delta(E_i^{(n)})=\sum_{\gamma+\eta=n}q_i^{\gamma\eta}E_i^{(\eta)}\otimes K_i^{-\eta}E_i^{(\gamma)}$ and $\Delta(F_i^{(n)})=\sum_{\gamma+\eta=n}q_i^{-\gamma\eta}F_i^{(\gamma)}K_i^\eta\otimes F_i^{(\eta)}$. Also $\binom n\gamma_i t_\gamma t_\eta=q_i^{-\gamma\eta}t_n$. In (ii)'s first right side, toral crossing $E_i^{(\gamma)}K_i^{-\eta}=q_i^{2\gamma\eta}K_i^{-\eta}E_i^{(\gamma)}$ and divided-power multiplication produce the coefficient $(q_i-q_i^{-1})^nt_nq_i^{\gamma\eta}$. In the second right side, no toral crossing is needed and the coefficient is $(q_i-q_i^{-1})^nt_nq_i^{-\gamma\eta}$. These are precisely the two left-side coproduct coefficients. [F2, F4, step 1.2, algebra]

2.3 **The barred coproduct identity.** Let $r(u)$ be the negative-half twisted coproduct obtained from $\Delta u$ by removing $K$-factors, with tensor multiplication twisted by $q^{-(\beta,\gamma)}$. Its bar counterpart satisfies $\bar r(u)_{\eta,\gamma}=q^{(\eta,\gamma)}\operatorname{flip}(r(u)_{\gamma,\eta})$: both sides send $F_i$ to $F_i\otimes1+1\otimes F_i$, and the scalar twist verifies multiplicativity on homogeneous products. In $\overline\Delta u$, moving the torus to the left contributes $q^{-(\eta,\gamma)}$ and cancels this factor. Thus, after removing the middle torus $K_{-\gamma}$, the $(\eta,\gamma)$ coefficient of $\overline\Delta u$ is the flip of $r(u)_{\gamma,\eta}$. The Hopf multiplication adjunction used in step 1.2 now shows that contraction of the last two root slots of $(\mathrm{id}\otimes\overline\Delta)\Theta$ gives $ab$, with $a$ testing degree $\gamma$ and $b$ degree $\eta$. The same contraction of $(\Theta_\gamma)_{13}K_{-\gamma}^{(2)}(\Theta_\eta)_{12}$ gives $ab$. Perfectness proves (iv). [F2, F4, step 1.2, algebra]

3.1 **The cocycle identity.** Summing (ii)'s first identity, and noting that the middle torus commutes with every outer $(\Theta_\eta)_{13}$, gives $((\Delta\otimes\mathrm{id})\Theta)\Theta_{12}=\Theta_{23}(\sum_\eta(\Theta_\eta)_{13}K_{-\eta}^{(2)})\Theta_{12}$. By (iv) the last two factors are $(\mathrm{id}\otimes\overline\Delta)\Theta$. Applying $\Delta(y)\Theta=\Theta\overline\Delta(y)$ in the last two positions to each second-factor coefficient $y$ of $\Theta$ gives $\Theta_{23}(\mathrm{id}\otimes\overline\Delta)\Theta=((\mathrm{id}\otimes\Delta)\Theta)\Theta_{23}$. This proves (iii). All operations are coefficientwise in the threefold completion, or finite on the stated admissible vectors. No middle torus is commuted through a $(\Theta_\gamma)_{23}$ term. [F1, step 1.2, step 2.3, algebra]

4.1 **Conclusion and normalization.** Steps 1.1 and 2.1 prove (i); step 1.2 proves (ii) with the degree-$\alpha_i$ instances and step 2.2 verifies it independently in rank one to all degrees; step 2.3 proves (iv); step 3.1 proves the cocycle identity (iii). The equation $\Delta(u)X=X\overline\Delta(u)$ is homogeneous and linear in $X$, so every nonzero scalar multiple of $\Theta$ satisfies it with $\Theta_0$ scaled equally, and only the normalization $\Theta_0=1$ selects $\Theta$; all computations are at the field level and involve no integrality, while the finite-support hypotheses of [F3] are checked before any completed series is evaluated. [step 2.1, step 1.2, step 2.2, step 2.3, step 3.1] ∎
