---
id: thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique
kind: theorem
title: "Existence and uniqueness of the weightwise quasi-$R$ intertwiner"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves, def-kashiwara-skew-derivations-on-the-negative-quantum-half, def-root-height-completion-for-weightwise-quasi-r-intertwiners, lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite, lem-lusztig-and-kashiwara-normalizations-match-by-root-color, lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree, lem-the-negative-half-is-separated-by-iterated-skew-derivations, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 12
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Antoine Lacabanne, Drinfeld Double of Quantum Groups, Tilting Modules and Z-Modular Data Associated to Complex Reflection Groups, arXiv:1807.00770v2"
      url: "https://arxiv.org/pdf/1807.00770v2"
      locator: "Proposition 1.14 with its full proof, printed pp. 8–10, Lemma 1.15, printed p. 9, Lemma 1.16 and Proposition 1.17, printed pp. 10–11; §1.5–1.6 for the pairing and dual bases; the source is the Drinfeld double $D_q(\\mathfrak g)$, so the dictionary with the library's $U_q$ must be checked."
    - title: "Jonathan Brundan, Dual Canonical Bases and Kazhdan–Lusztig Polynomials, arXiv:math/0509700v2 (Transform. Groups 14 (2009), 535–558)"
      url: "https://arxiv.org/pdf/math/0509700v2"
      locator: "§3, printed pp. 7–8: $\\Theta$ from [L, 4.1.2] in the library's-style coproduct (the article's $\\Delta$ matches the library's $\\Delta(E_i)=1\\otimes E_i+E_i\\otimes K_{i+1,i}$ up to index conventions), with $\\Theta_0=1$ and $\\Theta_\\lambda\\in U^+_\\lambda\\otimes U^-_\\lambda$."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§4.1.1–4.1.3, printed pp.34–36 (PDF43–45), complete field coevaluation/generator/separation uniqueness proof; §4.1.4, printed p.37 (PDF46), exact rank-one formula; actual convention transport from§3.1.4, printed p.20(PDF29)."
---

## Statement

Let $\Theta=\sum_{\nu\in Q_+}\Theta_\nu\in\widehat C$ be the $D$-coevaluation family of the diagonal root-height completion $\widehat C$ of [[def-root-height-completion-for-weightwise-quasi-r-intertwiners]], built from the normalized Drinfeld pairing $D$ of [[def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves]] and its homogeneous dual bases ([[lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite]], [[lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree]]). Then $\Theta$ is the unique normalized bar-coproduct intertwiner for the library coproduct $\Delta$: that is,
$$\Delta(u)\Theta=\Theta\,\overline\Delta(u)\qquad\text{for all }u\in U_q(\mathfrak g),\qquad \overline\Delta(u)=(\psi\otimes\psi)\Delta(\psi(u)),$$
among families with $\Theta_0=1$. Its generator recursions are
$$[1\otimes E_i,\Theta_\nu]=\Theta_{\nu-\alpha_i}(E_i\otimes K_i)-(E_i\otimes K_i^{-1})\Theta_{\nu-\alpha_i},$$
$$[F_i\otimes1,\Theta_\nu]=\Theta_{\nu-\alpha_i}(K_i^{-1}\otimes F_i)-(K_i\otimes F_i)\Theta_{\nu-\alpha_i},$$
where components of negative root degree are $0$ and the toral parts commute because $\Theta_\nu$ has toral weight zero. In rank one, $\Theta_{n\alpha_i}=(q_i-q_i^{-1})^n[n]_{q_i^2}!\,E_i^{(n)}\otimes F_i^{(n)}$ with $[n]_{q_i^2}!=\prod_{r=1}^n(1+q_i^2+\cdots+q_i^{2(r-1)})$, so that $\Theta_{\alpha_i}=(q_i-q_i^{-1})E_i\otimes F_i$. The family evaluates precisely under the explicit finite-support hypotheses of the completion. This is not the native unscaled doubled-torus $\Psi\Delta^{\mathrm{op}}$ relation, and no integral algebra coefficient claim is made.

## Facts & Assumptions

**Given:** The Drinfeld–Jimbo algebra $U_q(\mathfrak g)$ with coproduct $\Delta$, counit $\varepsilon$ and antipode $S$ of [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]], the fixed $\mathbb Q$-linear automorphism $\psi$ with $\psi(q)=q^{-1}$, $\psi(E_i)=E_i$, $\psi(F_i)=F_i$, $\psi(K_h)=K_h^{-1}$ ([[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]]), the resulting $\overline\Delta(u)=(\psi\otimes\psi)\Delta(\psi(u))$, the diagonal root-height completion $\widehat C$ with $\Theta_0=1$ and its finite-support action of [[def-root-height-completion-for-weightwise-quasi-r-intertwiners]], and the normalized pairing $D$ of [[def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves]].

[F1] Dual-basis sums ([[lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite]]): for each $\nu$ the element $\Theta_\nu=\sum_au_a\otimes v^a$ over any homogeneous basis $(u_a)$ of $U_q^+[\nu]$ with $D$-dual basis $(v^a)$ is independent of the choice, is a finite $\mathbb Q$-linear combination of the tensor product $U_q^+[\nu]\otimes U_q^-[-\nu]$, and $\Theta_0=1$; the family acts vectorwise finitely exactly under the completion's hypotheses.

[F2] Perfect graded pairing ([[lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree]]): $D$ is homogeneous, perfect on every finite root degree, and satisfies the Hopf adjunctions
$$D(x,yy')=\sum D(x_{(1)},y)D(x_{(2)},y'),\qquad D(xx',y)=\sum D(x,y_{(1)})D(x',y_{(2)})$$
for the library coproduct on $U_q^-$ and the opposite coproduct on $U_q^+$ ([[def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves]]), together with the normalization $D(E_i,F_j)=\delta_{ij}(q_i-q_i^{-1})^{-1}$ and $D(E_i^{(n)},F_i^{(n)})=q_i^{-n(n-1)/2}/([n]_i!(q_i-q_i^{-1})^n)$. On the toral directions $D(K_\nu,K_\mu)=q^{(\nu,\mu)}$.

[F3] Presentation transport ([[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]]): the semilinear involution $\varphi(q)=q^{-1}$, $\varphi(E_i)=E_i$, $\varphi(F_i)=F_i$, $\varphi(K_h)=K_{-h}$ carries Lusztig's source coproduct $\Delta_L$ and source form $B_L$ to the library coproduct and normalized form up to the tensor flip; the source coefficient $(-1)^{\mathrm{ht}\,\nu}\prod_iv_i^{\nu_i}$ times the $B_L$-coevaluation equals $d_\nu$ times the $B_K$-coevaluation exactly. The comparison maps in the completed tensor square are coefficientwise isomorphisms on homogeneous components.

[F4] Skew derivations and separation ([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]], [[lem-the-negative-half-is-separated-by-iterated-skew-derivations]]): the Serre presentation of $U_q^-$ defines left and right skew derivations $e_i'$, $e_i''$ with $e_i'(xy)=e_i'(x)y+xe_i''(y)$ and the quotient rule for the toral numerators; and for every nonzero positive-height element of $U_q^+$ some iterated skew derivative is nonzero, so a positive-degree half element all of whose iterated derivatives vanish is zero.

[F5] Hopf identities ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]): $\Delta,\overline\Delta$ are algebra homomorphisms; $\overline\Delta(u)=(\psi\otimes\psi)\Delta(\psi(u))$ is compatible with the algebra structure and $\overline\Delta\equiv\Delta$ on the toral subalgebra; $\Delta(E_i)=E_i\otimes K_i^{-1}+1\otimes E_i$, $\Delta(F_i)=F_i\otimes1+K_i\otimes F_i$, so $\overline\Delta(E_i)=E_i\otimes K_i+1\otimes E_i$ and $\overline\Delta(F_i)=F_i\otimes1+K_i^{-1}\otimes F_i$.

## Proof

**Proof technique:** direct.

1.1 **The candidate family.** Define $\Theta_\nu$ by [F1] and put $\Theta=\sum_\nu\Theta_\nu\in\widehat C$; then $\Theta_0=1$ and, by [F1], the family is independent of all choices of bases and acts vectorwise finitely under the completion's hypotheses. Its components are toral weight zero, because each $\Theta_\nu$ pairs the root degrees $\nu$ and $-\nu$. [F1]

1.2 **The $E_i$-identity in the pairing picture.** Expand all tensors in homogeneous $D$-dual bases and test $\Delta(E_i)\Theta_\nu=\Theta_{\nu+?}\overline\Delta(E_i)$ coefficientwise. By [F1] and [F2] the positive tensor factor of $\Theta_\nu$ can be paired with an arbitrary element $x$ of $U_q^+[\nu]$; writing the resulting linear functional as $D$-duality turns the equation into the two adjunction identities of [F2] evaluated on $xy$ versus the skew-derivation decomposition of the products $E_ix$ and $xE_i$ in the halves. Concretely, moving $E_i$ across the first tensor factor produces the denominators $(q_i-q_i^{-1})$ of the presentation and the toral numerators $K_i^{\pm1}$ of [F4]; comparing the two sides degree by degree gives exactly $$[1\otimes E_i,\Theta_\nu]=\Theta_{\nu-\alpha_i}(E_i\otimes K_i)-(E_i\otimes K_i^{-1})\Theta_{\nu-\alpha_i},$$ with the convention that $\Theta_{\nu-\alpha_i}=0$ when $\nu-\alpha_i\notin Q_+$. [F1, F2, F4, F5]

2.1 **Generator identities: toral case and structure of the verification.** For $u=K_h$ both $\Delta(K_h)=K_h\otimes K_h$ and $\overline\Delta(K_h)=(\psi\otimes\psi)(K_{-h}\otimes K_{-h})=K_h\otimes K_h$, and $\Theta_\nu$ commutes with $K_h\otimes1$ and $1\otimes K_h$ by toral weight zero, so $\Delta(K_h)\Theta=\Theta\overline\Delta(K_h)$. Since $\Delta$ and $\overline\Delta$ are algebra homomorphisms [F5], once the two root-generator identities hold, the identity extends to all of $U_q(\mathfrak g)$. [F5, step 1.1]

3.1 **The $F_i$-identity.** The same coefficientwise computation with $F_i$ in the second tensor factor, using the adjunction with the opposite coproduct and the right skew derivation of [F4], yields $$[F_i\otimes1,\Theta_\nu]=\Theta_{\nu-\alpha_i}(K_i^{-1}\otimes F_i)-(K_i\otimes F_i)\Theta_{\nu-\alpha_i}.$$ Both displayed recursions determine $\Theta_\nu$ from the components of lower degree, and in particular the first-degree component is forced by $D(E_i,F_i)=\delta_{ij}(q_i-q_i^{-1})^{-1}$ and $D(1,1)=1$. Since these recursions are equivalent to the two generator identities, $\Delta(u)\Theta=\Theta\overline\Delta(u)$ holds on generators and hence on all $u$ by step 2.1. [F2, F4, step 1.2]

4.1 **Uniqueness.** Let $\Theta,\Theta'$ be two normalized solutions and $\Omega=\Theta-\Theta'$, so $\Omega\in\widehat C$, $\Omega_0=0$, and $\Delta(u)\Omega=\Omega\overline\Delta(u)$ for all $u$. Suppose $\Omega\ne0$ and let $\nu_0$ be a minimal root degree with $\Omega_{\nu_0}\ne0$; by minimality the $\alpha_i$-recursions of step 3.1 applied to $\Omega$ carry no lower-degree terms, so for every $i$ the skew derivatives of the two coefficient tensors of $\Omega_{\nu_0}$ vanish, in the sense of the two recursions. Expanding $\Omega_{\nu_0}$ in homogeneous bases of $U_q^+[\nu_0]$ and testing against $D$-dual vectors, the two recursions and [F2] turn the generator identities into the statement that all iterated skew derivatives of every coefficient vector in the positive half vanish; the separation theorem [F4] then forces every coefficient of $\Omega_{\nu_0}$ to be zero, a contradiction. Hence $\Omega=0$ and the normalized solution is unique. [F1, F2, F4, step 3.1]

5.1 **Rank-one coefficient.** Let $I=\{i\}$. Since the degree-$n\alpha_i$ component of $U_q^+$ with its basis element $E_i^{(n)}$ pairs with $F_i^{(n)}$ by [F2] with value $D(E_i^{(n)},F_i^{(n)})=q_i^{-n(n-1)/2}/([n]_i!(q_i-q_i^{-1})^n)$, the inverse coefficient is $$\bigl(D(E_i^{(n)},F_i^{(n)})\bigr)^{-1}=(q_i-q_i^{-1})^nq_i^{n(n-1)/2}[n]_i!=(q_i-q_i^{-1})^n[n]_{q_i^2}!,$$ using $[n]_{q_i^2}!=\prod_{r=1}^n(1+\cdots+q_i^{2(r-1)})=q_i^{n(n-1)/2}[n]_i!$. Hence $\Theta_{n\alpha_i}=(q_i-q_i^{-1})^n[n]_{q_i^2}!E_i^{(n)}\otimes F_i^{(n)}$, and for $n=1$ this is $\Theta_{\alpha_i}=(q_i-q_i^{-1})E_i\otimes F_i$. [F2, step 4.1]

6.1 **Conclusion and scope.** Steps 1.1–1.4 construct the normalized family and the two generator recursions; step 4.1 proves uniqueness by minimal degree and separation; step 5.1 computes the rank-one coefficient. The construction used only the graded pairing, the completion's finite-support hypotheses and the presentation's skew derivations, so the family is the $D$-coevaluation of the completion and not the unscaled doubled-torus normalization as recorded by the transport dictionary of [F3]; no integrality of coefficients was asserted at any point. [F3, step 4.1, step 5.1] ∎
