---
id: lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite
kind: lemma
title: "Homogeneous dual-basis sums: basis independence and weightwise finiteness"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree, def-root-height-completion-for-weightwise-quasi-r-intertwiners]
justified_by: []
aliases: []
landmark: false
dependency_level: 11
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jonathan Brundan, Dual Canonical Bases and Kazhdan–Lusztig Polynomials, arXiv:math/0509700v2 (Transform. Groups 14 (2009), 535–558)"
      url: "https://arxiv.org/pdf/math/0509700v2"
      locator: "§3, printed pp. 7–8: 'For polynomial representations $V$ and $W$, all but finitely many $\\Theta_\\lambda$ act as zero on any given vector $v\\otimes w\\in V\\otimes W$, by weight considerations.'"
    - title: "Antoine Lacabanne, Drinfeld Double of Quantum Groups, Tilting Modules and Z-Modular Data Associated to Complex Reflection Groups, arXiv:1807.00770v2"
      url: "https://arxiv.org/pdf/1807.00770v2"
      locator: "§1.6–1.7, printed pp. 7–10: the computed dual bases and the definition of $\\Theta_\\mu$; the basis independence is the standard dual-basis identity."
    - title: "George Lusztig, Introduction to Quantum Groups, author-hosted complete scan"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§4.1.2 printed35/PDF44: full field homogeneous coevaluation; the finite-action hypotheses and basis-change verification are supplied locally."
---

## Statement

Let $\nu\in Q_+$, let $(u_a)$ be a field basis of $U_q^+[\nu]$ and $(v^a)$ its $D$-dual basis in $U_q^-[-\nu]$ with respect to the normalized Drinfeld pairing of [[lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree]] (so $D(u_a,v^b)=\delta_a^b$), and set
$$\Theta_\nu:=\sum_au_a\otimes v^a\in U_q^+[\nu]\otimes U_q^-[-\nu]\subseteq\widehat C,$$
the ambient root-height completion of [[def-root-height-completion-for-weightwise-quasi-r-intertwiners]]. Then $\Theta_\nu$ is independent of the chosen basis of $U_q^+[\nu]$, and $\Theta_0=1\otimes1$. The family $(\Theta_\nu)_\nu$ has finite-dimensional homogeneous components and defines a vectorwise finite action under the exact finiteness hypotheses of the completion definition. Its degree-$\nu$ action shifts a label pair $(\mu,\eta)$ to $(\mu+\nu,\eta-\nu)$, preserving the total weight, and on finite-weight-space $O_{\mathrm{int}}$ pairs every fixed total-weight space has a uniform finite tail bound beyond which all components act as $0$. No integral algebra coefficients are asserted, and the positive-height components have no same-weight-pair diagonal term.

## Facts & Assumptions

**Given:** The graded Serre halves $U_q^\pm=\bigoplus_\nu U_q^\pm[\pm\nu]$, the perfect normalized pairing $D$, and the completion $\widehat C=\prod_{\nu\in Q_+}U_q^+[\nu]\otimes U_q^-[-\nu]$.

[F1] Perfect graded pairing ([[lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree]]): $D$ is homogeneous and perfect on every finite root degree, so each finite-dimensional $U_q^+[\nu]$ has a unique $D$-dual basis in $U_q^-[-\nu]$ and vice versa.

[F2] Completion and finiteness ([[def-root-height-completion-for-weightwise-quasi-r-intertwiners]]): $\widehat C$ is the diagonal root-height completion with root-degree convolution multiplication $(AB)_\nu=\sum_{\beta+\gamma=\nu}A_\beta B_\gamma$, each component sum being finite; a family acts on $m_\mu\otimes n_\eta$ by its finite sum whenever $U_q^+[\nu]m_\mu\otimes U_q^-[-\nu]n_\eta=0$ for all sufficiently large $\nu$; this holds for finite-union bounded-above first supports, for lowest second factors with bounded-below support, and uniformly on each fixed total-weight space of a pair of finite-weight-space $O_{\mathrm{int}}$ modules.

[F3] Sample weights: $U_q^+[\nu]$ acts on weight $\mu$ vectors by shifting to $\mu+\nu$ and $U_q^-[-\nu]$ acts on weight $\eta$ vectors by shifting to $\eta-\nu$; the tensor orientation is positive first, negative second.

## Proof

**Proof technique:** direct.

1.1 **Basis independence.** If $u'_a=\sum_bu_bg_{ba}$ for an invertible matrix $g$, then the dual basis is $v'^a=\sum_b(g^{-1})_{ab}v^b$, since $\sum_bg_{bc}(g^{-1})_{ab}=\delta_{ac}$. Consequently $\sum_au'_a\otimes v'^a=\sum_{b,c}u_b\otimes v^c\sum_ag_{ba}(g^{-1})_{ac}=\sum_bu_b\otimes v^b$. [F1, algebra]

2.1 **Components and degree shift.** By [F1] the pieces $U_q^\pm[\pm\nu]$ are finite-dimensional, so each $\Theta_\nu$ lies in the finite-dimensional tensor product $U_q^+[\nu]\otimes U_q^-[-\nu]$ and $\Theta_0=1\otimes1$; by [F3] the degree-$\nu$ action shifts $(\mu,\eta)$ to $(\mu+\nu,\eta-\nu)$ and preserves the total weight $\mu+\eta$. [F1, F3, step 1.1]

3.1 **Vectorwise finiteness and the uniform tail bound.** The action on a vector $m_\mu\otimes n_\eta$ is the sum of the finitely many terms with $U_q^+[\nu]m_\mu\ne0$ and $U_q^-[-\nu]n_\eta\ne0$, and [F2] provides exactly the hypotheses under which this set of $\nu$ is finite and uniformly bounded on each fixed total-weight space of finite-weight-space $O_{\mathrm{int}}$ pairs. Hence the family defines a vectorwise finite action, and no integrality of coefficients or diagonal same-weight term is produced. [F2, step 2.1]

4.1 **Conclusion.** Steps 1.1 and 2.1 give the stated basis independence, $\Theta_0=1$, finite-dimensional components and degree shift, and step 3.1 gives the exact finiteness scope; no integral algebra coefficient property is asserted. [step 1.1, step 2.1, step 3.1] ∎

