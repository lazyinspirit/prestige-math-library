---
id: def-crystal-lattice-and-crystal-basis
kind: definition
title: "Crystal lattices, crystal bases and their crystals"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kashiwara-crystal-operators, def-quantum-weight-module-and-integrability, def-the-local-ring-at-q-zero, thm-the-i-string-decomposition-of-the-negative-half]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.3, printed pp. 473-474, Definition 2.3.1, (2.3.1)-(2.3.6): the lower crystal base $(L,B)$ with $M\\cong\\mathbb Q(q)\\otimes_AL$, $B$ a basis of $L/qL$, operator stability, the graded decompositions $L=\\bigoplus L_\\lambda$, $B=\\bigsqcup B_\\lambda$ and the partial-inverse condition; §2.4 uses the same data for the crystal graph."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§4, printed pp. 15-17, Definitions 4.3-4.6 and the surrounding remarks: the lattice, the residue basis, the two operator stability conditions and the partial-inverse property."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed pp. 327-329: the crystal lattice at $q=0$ and the crystal obtained as its residue basis."
---

## Definition

Let $A_0$ be the local ring of [[def-the-local-ring-at-q-zero]] and let $M$ be an integrable weight module with its Kashiwara operators $\tilde e_i,\tilde f_i$ ([[def-kashiwara-crystal-operators]], [[def-quantum-weight-module-and-integrability]]).

A **crystal lattice** of $M$ is a free $A_0$-submodule $L\subseteq M$ such that

(i) $L$ generates $M$ over $\mathbb Q(q)$, i.e. the canonical map $\mathbb Q(q)\otimes_{A_0}L\to M$ is an isomorphism;

(ii) $L=\bigoplus_{\mu\in P}L_\mu$ with $L_\mu:=L\cap M_\mu$, and each $L_\mu$ is again a free $A_0$-module;

(iii) $\tilde e_iL\subseteq L$ and $\tilde f_iL\subseteq L$ for all $i\in I$.

Because $A_0$ is a principal ideal domain, each graded piece $L_\mu$ has a well-defined rank $\operatorname{rank}_{A_0}L_\mu$, and (ii) says that $\operatorname{rank}_{A_0}L$ is the sum of the ranks of the $L_\mu$.

A **crystal basis** of $M$ is a pair $(L,B)$ consisting of a crystal lattice $L$ and a $\mathbb Q$-basis $B$ of the crystal limit $L/qL\cong\mathbb Q\otimes_{A_0}L$ ([[def-the-local-ring-at-q-zero]]) such that

(iv) $B=\bigsqcup_{\mu\in P}B_\mu$, where $B_\mu:=B\cap(L_\mu/qL_\mu)$;

(v) $\tilde e_iB\subseteq B\cup\{0\}$ and $\tilde f_iB\subseteq B\cup\{0\}$ for all $i\in I$;

(vi) for all $b,b'\in B$ and all $i$: $\tilde f_ib=b'$ if and only if $b=\tilde e_ib'$; here $\tilde e_i,\tilde f_i$ denote the operators induced on $L/qL$.

The **crystal graph** of $(L,B)$ is the coloured directed graph with vertex set $B$ and an arrow $b\xrightarrow{i}b'$ whenever $\tilde f_ib=b'$ (by (vi) this is equivalent to $b=\tilde e_ib'$). The **crystal of $M$** is this graph, together with the weight function $b\mapsto\mu$ for $b\in B_\mu$. For every $\mu\in P$ one has $\dim_{\mathbb Q(q)}M_\mu=\operatorname{rank}_{A_0}L_\mu=\#B_\mu$.

A **crystal basis of the negative half** $U_q^-$ is defined by the same data with $U_q^-$ in place of $M$: a free $A_0$-submodule $L\subseteq U_q^-$ with $U_q^-\cong\mathbb Q(q)\otimes_{A_0}L$ and $\tilde e_iL,\tilde f_iL\subseteq L$ ([[thm-the-i-string-decomposition-of-the-negative-half]]), together with a $\mathbb Q$-basis $B$ of $L/qL$ satisfying (v) and (vi) for the operators on the negative half. Here the root grading replaces the weight grading, and the lattice and residue basis are required to respect that root grading. In the negative half, $\tilde e_i\tilde f_i=\mathrm{id}$ implies $\tilde f_iB\subseteq B$; this refinement is specific to its infinite strings. No choice principle is used in these definitions.

## Facts & Assumptions

**Given:** The local ring $A_0=\mathbb Q[q]_{(q)}$ with residue field $\mathbb Q$, an integrable chosen $P$-graded type-1 module $M$ with Kashiwara operators, and a crystal lattice $L\subseteq M$ with $L=\bigoplus_\mu L_\mu$ as in (ii).

[F1] $\tilde e_i,\tilde f_i$ are $\mathbb Q(q)$-linear endomorphisms of $M$ shifting the label weight by $+\alpha_i$ and $-\alpha_i$; on a string they move $F_i^{(n)}u_n$ to $F_i^{(n-1)}u_n$ or $F_i^{(n+1)}u_n$, with the top of an $\tilde e_i$-string and the bottom of an $\tilde f_i$-string mapped to $0$ ([[def-kashiwara-crystal-operators]]).

[F2] $M=\bigoplus_{\mu\in P}M_\mu$ with the toral action and gradings of [[def-quantum-weight-module-and-integrability]].

[F3] For a free $A_0$-module $N$ the canonical map $\mathbb Q\otimes_{A_0}N\to N/qN$ is an isomorphism, and $\mathbb Q\otimes_{A_0}N$ is a $\mathbb Q$-vector space of dimension equal to the rank of $N$; $\mathbb Q(q)\otimes_{A_0}N$ has dimension equal to the rank of $N$ over $\mathbb Q(q)$ ([[def-the-local-ring-at-q-zero]]).

[F4] On the negative half, $\tilde e_i\tilde f_i=\operatorname{id}_{U_q^-}$, and the operators shift the root degree by $\mp\alpha_i$ ([[thm-the-i-string-decomposition-of-the-negative-half]], part (iii)).

## Verification

**Proof technique:** direct. The induced operators, the rank and residue counts and the negative-half refinement are read off the axioms using the crystal-limit isomorphism.

1.1 Induced operators. By (iii) the operators preserve $L$ and commute with multiplication by $A_0$, so they descend to $\mathbb Q$-linear endomorphisms of $L/qL$, which is canonically $\mathbb Q\otimes_{A_0}L$ by [F3]; by [F1] they shift the label weight by $\pm\alpha_i$, so they map $L_\mu/qL_\mu$ to $L_{\mu+\alpha_i}/qL_{\mu+\alpha_i}$ and to $L_{\mu-\alpha_i}/qL_{\mu-\alpha_i}$, and axiom (v) says that they map $B$ into $B\cup\{0\}$. [F1, F3, given]

1.2 Rank decomposition. Since $L=\bigoplus_\mu L_\mu$ with every $L_\mu$ free by (ii), $\operatorname{rank}_{A_0}L=\sum_\mu\operatorname{rank}_{A_0}L_\mu$, and applying $\mathbb Q(q)\otimes_{A_0}-$ gives $\mathbb Q(q)\otimes_{A_0}L=\bigoplus_\mu\mathbb Q(q)\otimes_{A_0}L_\mu$ with each summand of dimension $\operatorname{rank}_{A_0}L_\mu$ by [F3]. The isomorphism of (i) is weight graded, because $L_\mu\subseteq M_\mu$ and the target is the direct sum of the $M_\mu$; hence $\dim_{\mathbb Q(q)}M_\mu=\operatorname{rank}_{A_0}L_\mu$ for every $\mu$. [F2, F3, given, algebra]

2.1 Residue counts. The crystal limit isomorphism of [F3] is compatible with the grading, and $L/qL=\bigoplus_\mu L_\mu/qL_\mu$; by (iv) each $B_\mu$ is contained in $L_\mu/qL_\mu$ and $B=\bigsqcup_\mu B_\mu$ is a $\mathbb Q$-basis of $L/qL$, so $B_\mu$ is a $\mathbb Q$-basis of $L_\mu/qL_\mu$. Hence $\#B_\mu=\dim_{\mathbb Q}L_\mu/qL_\mu=\operatorname{rank}_{A_0}L_\mu=\dim_{\mathbb Q(q)}M_\mu$, which is the displayed equality, and the weight function of the crystal is well defined by (iv). [F3, step 1.2, given, algebra]

2.2 The graph and the partial-inverse property. By (vi) the arrow relation $b\xrightarrow{i}b'$ is symmetric under exchanging $\tilde e_i$ and $\tilde f_i$, so the crystal graph has no ambiguity: an arrow exists exactly when $\tilde f_ib=b'$, equivalently $b=\tilde e_ib'$. In a finite-dimensional piece a string may end at a bottom, where $\tilde f_ib=0$; by (v) this is allowed and no vertex is added. [given, step 1.1]

2.3 The negative half. For $U_q^-$ the same discussion applies with the root grading in place of the weight grading. By [F4] the induced endomorphisms of $L/qL$ satisfy $\bar{\tilde e}_i\bar{\tilde f}_i=\mathrm{id}$, so $\bar{\tilde f}_i$ is injective and no element of $B$ is mapped to $0$ by $\tilde f_i$; with (v) this gives $\tilde f_iB\subseteq B$, the infinite-string refinement. [F4, step 1.1]

3.1 Choice. The definitions select no bases, no complements and no representatives; the lattice, its grading and the residue basis are given data, and all statements above are computations with them, so no choice principle is used. [given] ∎
