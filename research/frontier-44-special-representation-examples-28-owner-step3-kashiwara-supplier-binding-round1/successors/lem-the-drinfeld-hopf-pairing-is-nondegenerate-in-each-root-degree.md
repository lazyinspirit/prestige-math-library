---
id: lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree
kind: lemma
title: "The Drinfeld pairing is nondegenerate in each root degree and matches the shuffle pairing"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves, def-root-height-completion-for-weightwise-quasi-r-intertwiners, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral, thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing, def-lusztig-divided-power-integral-form, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra, lem-lusztig-and-kashiwara-normalizations-match-by-root-color]
justified_by: []
aliases: []
landmark: false
dependency_level: 10
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§3.2, printed pp. 479–481 (the pairing and its nondegeneracy), §1.3 for the involution; §4.7, printed pp. 495–497, Lemmas 4.7.1–4.7.3 for the degreewise form comparison."
    - title: "Antoine Lacabanne, Drinfeld Double of Quantum Groups, Tilting Modules and Z-Modular Data Associated to Complex Reflection Groups, arXiv:1807.00770v2"
      url: "https://arxiv.org/pdf/1807.00770v2"
      locator: "Proposition 1.7 and the displayed norm computation in §1.5, printed pp. 6–7, and §1.6, printed pp. 7–8, for the dual bases; §1.7, printed pp. 8–10, for the homogeneous intertwining equations."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed pp. 8–11: the half pairing and the Serre ideals; §6, printed pp. 40–44, for the form on $U_q^-$."
---

## Statement

Let $D$ be the normalized Drinfeld pairing of [[def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves]], $D(x,y)=d_\nu^{-1}B_K(\iota x,y)$ on $U_q^+[\nu]\times U_q^-[-\nu]$, where $B_K$ is the normalized Kashiwara half form of [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]]. Then:

(i) $D$ is homogeneous, descends to the actual Serre quotients $U_q^\pm$, and is nondegenerate (equivalently perfect) over $\mathbb Q(q)$ in every finite root degree; its rank-one values are $D(E_i,F_j)=\delta_{ij}(q_i-q_i^{-1})^{-1}$ and $D(E_i^{(n)},F_i^{(n)})=q_i^{-n(n-1)/2}/([n]_i!(q_i-q_i^{-1})^n)$.

(ii) $D$ equals the formal generic Hopf pairing on the simple-root Borel extensions with the exact generator and toral normalization, so that
$$D(xx',y)=\sum D(x,y_{(1)})D(x',y_{(2)}),\qquad D(x,yy')=\sum D(x_{(1)},y)D(x_{(2)},y'),$$
with $\Delta y$ on the negative Borel and $\Delta^{\mathrm{op}}x$ on the positive Borel, including their toral factors.

These are field identities; no divided-power integral perfectness and no $A$-valuedness of $D$ is asserted.

## Facts & Assumptions

**Given:** The normalized half form $B_K$ on $U_q^-$, the isomorphism $\iota:U_q^+\to U_q^-$, $E_i\mapsto F_i$, the degree scalar $d_\nu=\prod_i(q_i-q_i^{-1})^{\nu_i}$, and the generic Hopf pairing between the Serre halves.

[F1] Half form perfectness and values ([[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]], [[def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves]]): $B_K$ is the unique normalized homogeneous form on $U_q^-$ with $B_K(F_iP,Q)=B_K(P,e_i'Q)$; it is nondegenerate on each finite-dimensional $U_q^-[-\nu]$; and $D(E_i,F_j)=\delta_{ij}(q_i-q_i^{-1})^{-1}$ with $D(E_i^{(n)},F_i^{(n)})=q_i^{-n(n-1)/2}/([n]_i!(q_i-q_i^{-1})^n)$.

[F2] Generic Hopf pairing ([[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]]): the formal quantum Serre halves carry a nondegenerate pairing $(x,y)$ determined by the coproduct adjunction identities, with the mixed generator values $\delta_{ij}/(q_i-q_i^{-1})$ and the prescribed toral values.

[F3] Coproduct and skew recursion ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]], [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]]): $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$, $\Delta F_i=F_i\otimes1+K_i\otimes F_i$, and the normalized half form satisfies the degree-shifted recursion $B_K(F_iP,Q)=B_K(P,e_i'Q)$ in the form dictionary, equivalently the generator and toral normalization fixed in [F1].

[F4] Divided-power form ([[def-lusztig-divided-power-integral-form]]): the halves are root-graded and the divided powers $E_i^{(n)},F_i^{(n)}$ are the homogeneous generators used in the rank-one checks.

## Proof

**Proof technique:** direct.

1.1 **Transport makes $D$ homogeneous and perfect.** By [F1] the form $B_K$ is nondegenerate on each finite-dimensional graded piece $U_q^-[-\nu]$, and $\iota$ restricts to a $\mathbb Q(q)$-linear isomorphism $U_q^+[\nu]\to U_q^-[-\nu]$; multiplying by the nonzero scalar $d_\nu^{-1}$ does not change nondegeneracy. Hence $D$ is a homogeneous bilinear pairing perfect on every finite root degree, and its generator values are those displayed in [F1] and the Statement. [F1, F4]

1.2 **Descent to the Serre quotients.** The half form $B_K$ is defined on the actual Serre quotient by [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]] and is nondegenerate there; since $\iota$ identifies the positive Serre quotient with the negative one by the presentation comparison of [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]], the transport $D$ is defined on the quotient of each half and introduces no free-word radical. [F1, F3]

1.3 **The generic pairing equals $D$.** By [F2] the formal generic pairing is determined by the adjunction identities together with its values on generators and toral directions. Extracting one $E_i$ (respectively $F_i$) from $\Delta y$ (respectively $\Delta^{\mathrm{op}}x$) in the adjunction identity and comparing with the recursion of [F3] shows that the generic pairing satisfies the same normalized skew recursion as $B_K$ with degree factor $d_\nu/d_{\nu-\alpha_i}=q_i-q_i^{-1}$; a word-height induction on the negative half, using the coproduct formulas of [F3] and the toral factor retention in [F2], therefore identifies the two pairings on the simple-root Borel extensions, including their toral factors. Hence the two adjunction identities displayed in the Statement hold for $D$. [F1, F2, F3]

2.1 **Toral convention and limits of the claim.** The toral normalization is fixed by the root bilinear form and the counit exactly as in [F2]; the verification above uses the coproduct on the negative Borel and the opposite coproduct on the positive Borel, as required by the tensor orientation. Since all computations are performed in the field $\mathbb Q(q)$ with the finite graded pieces of [F1] and no lattice freeness is used, no integral perfectness or $A$-valuedness is obtained. [F2, step 1.3]

3.1 **Conclusion.** Steps 1.1–1.2 give (i), step 2.1 gives (ii), and step 2.1 records the exact field-level scope; in particular the rank-one values carry the factor $(q_i-q_i^{-1})^{-n}$ and no lower-lattice integrality is asserted. [step 1.1, step 1.2, step 2.1, step 2.1] ∎

