---
id: ex-qsmx-double-z2
kind: example
title: The four electric and magnetic sectors of $D(\mathbb Z_2)$
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - thm-qsmx-double-sector-labels
  - thm-qsmx-toric-strings-and-local-tests
  - def-qsmx-toric-cellular-hamiltonian
  - def-axiom-of-choice
dependency_roles:
  thm-qsmx-double-sector-labels: mathematical-premise
  thm-qsmx-toric-strings-and-local-tests: mathematical-premise
  def-qsmx-toric-cellular-hamiltonian: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: Finite algebraic example for $D(\mathbb Z_2)$ and the exact square-torus Pauli-string commutation relation; no general braiding, QFT, or empirical claim.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: "§4, PDF p. 12, for the $G=\\mathbb Z_2$ reduction to the toric-code projectors; §5.1, PDF pp. 14–15, for conjugacy-class/centralizer labels."
    - title: Alexander Cowtan and Shahn Majid, Quantum Double Aspects of Surface Code Models
      url: https://arxiv.org/pdf/2107.04411
      locator: "§2, PDF pp. 3–5, for $D(\\mathbb Z_n)$ and toric-code string operators; §3.2, PDF pp. 10–11, for conjugacy-class/centralizer sectors."
    - title: Mark de Wild Propitius and F. Alexander Bais, Discrete Gauge Theories
      url: https://arxiv.org/pdf/hep-th/9511201
      locator: "§2.1, PDF pp. 44–45, for flux and centralizer-charge labels."
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice for the stated lattice prerequisite. Let $\mathbb Z_2=\{e,s\}$ with $s^2=e$. Its finite-group double has exactly four irreducible complex sectors, each one-dimensional: the two conjugacy-class labels (flux labels) $e,s$ paired with the two group characters $\chi_\pm:\mathbb Z_2\to\mathbb C^\times$ with $\chi_\pm(e)=1$ and $\chi_\pm(s)=\pm1$. Here the conjugacy-class label $C$ is the magnetic-flux label and the centralizer-representation class $[\pi]$ is the electric-charge label; these are names for the algebraic labels. In particular, the nontrivial charge character evaluated on the nontrivial flux is $-1$, equal to the commutation sign for one crossing of a closed primal $Z$ string with a closed dual $X$ string on the square $L\times L$ torus for $L\ge3$.

## Example references

[[thm-qsmx-double-sector-labels]]

[[thm-qsmx-toric-strings-and-local-tests]]

## Facts & Assumptions

**Given:** The group $\mathbb Z_2=\{e,s\}$ with $s^2=e$, the finite-group double classification, and the exact square-torus crossing-string relation.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. This is inherited from the lattice theorem's stated interface; the finite group representation calculation itself uses only finite choices.

[F1] [[thm-qsmx-double-sector-labels]]: irreducible $D(G)$ representations are indexed by conjugacy classes $C$ and irreducible representations of the centralizer $Z_G(c)$, with dimension $|C|\dim\pi$.

[F2] [[thm-qsmx-toric-strings-and-local-tests]]: under [A1], for the square $L\times L$ torus with $L\ge3$, closed primal $Z$ and closed dual $X$ strings have commutator sign $(-1)^I$, where $I$ is their mod-two edge-crossing number.

[F3] [[def-qsmx-toric-cellular-hamiltonian]]: the square-torus coordinate cycles $p_1,q_1$ are chosen with mod-two intersection number $I(p_1,q_1)=1$.

## Verification

1.1 The group $\mathbb Z_2$ is abelian, so its two conjugacy classes are the singletons $\{e\}$ and $\{s\}$, and each centralizer is $\mathbb Z_2$. A group representation is determined by $T=\pi(s)$ with $T^2=I$. The operators $P_+=(I+T)/2$ and $P_-=(I-T)/2$ satisfy $P_+^2=P_+$, $P_-^2=P_-$, $P_+P_-=0$, and $P_++P_-=I$ by $T^2=I$; they commute with $T$, so their ranges are invariant. Irreducibility forces one range to be all of $V$ and the other zero, giving $T=I$ or $T=-I$. A scalar action on a complex vector space of dimension greater than one leaves every line invariant, so irreducibility forces dimension one. Conversely each of these two scalar actions defines a character because $(\pm1)^2=1$. Thus there are exactly the two characters $\chi_+$ and $\chi_-$ for each flux label. [given, F1, algebra]

1.2 By the definition of $\chi_-$, its value on the nontrivial flux is $\chi_-(s)=-1$. [given, algebra]

2.1 The coordinate cycles $p_1,q_1$ specified in [F3] have $I=1$. Applying [F2] to their closed strings gives commutation sign $(-1)^1=-1$, equal to $\chi_-(s)$. With no crossings, $I=0$ and the string sign is $+1=\chi_-(e)$. The claim is only equality of these finite algebraic signs; it asserts no general braid representation or physical realization. [A1, F1, F2, F3, step 1.2, algebra] ∎
