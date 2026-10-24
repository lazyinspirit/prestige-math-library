---
id: lem-crystal-operators-commute-with-highest-weight-projection-modulo-q
kind: lemma
title: "Projection from $\\mathcal L(\\infty)$ to $\\mathcal L(\\lambda)$ and its compatibility with the Kashiwara operators"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-crystal-lattice-and-crystal-basis, def-kashiwara-crystal-operators, def-kashiwara-lattices-lambda-and-infinity, thm-grand-loop-existence-of-highest-weight-crystal-bases, thm-the-i-string-decomposition-of-the-negative-half, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
axiom_use: "AC is inherited through the grand-loop clause N(r), whose proof applies J(r) and hence the AC-dependent negative-half form comparison; clauses (a), (b) and (d) are choice-free."
sources:
  scraped: []
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§7, printed pp. 34–35, Propositions 7.12–7.13 and Corollary 7.14; printed pp. 40–41, Proposition 7.23; printed p. 47, Proposition 7.34."
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§3.5, printed p. 488, Theorem 5: lattice projection, surviving-residue bijection and operator compatibilities."
---

## Statement

Let $\lambda\in P^+$ and let $\mathcal L(\lambda),\mathcal B(\lambda),\mathcal L(\infty),\mathcal B(\infty)$ be the lattices and bases of [[def-kashiwara-lattices-lambda-and-infinity]], with $\pi_\lambda:U_q^-\to V(\lambda)$, $P\mapsto Pv_\lambda$, and Kashiwara operators $\tilde e_i,\tilde f_i$. Then for every $\alpha\in Q_+$, every $i\in I$ and every $\lambda\in P^+$:

(a) **Lattice projection.** $\pi_\lambda(\mathcal L(\infty)_{-\alpha})=\mathcal L(\lambda)_{\lambda-\alpha}$.

(b) **Operator compatibility modulo $q$.** For every $P\in\mathcal L(\infty)_{-\alpha+\alpha_i}$, $\tilde f_i(Pv_\lambda)\equiv(\tilde f_iP)v_\lambda\bmod q\mathcal L(\lambda)$, and for every $b\in\mathcal B(\infty)_{-\alpha}$ with $\pi_\lambda(b)\neq0$, $\tilde e_i\pi_\lambda(b)=\pi_\lambda(\tilde e_ib)$ in $\mathcal L(\lambda)/q\mathcal L(\lambda)$. Equivalently $\tilde f_i\pi_\lambda=\pi_\lambda\tilde f_i$ on $\mathcal B(\infty)_{-\alpha+\alpha_i}$, where the left-hand side is computed in $V(\lambda)$.

(c) **Basis projection.** The map induced by $\pi_\lambda$ is a bijection $\{b\in\mathcal B(\infty)_{-\alpha}:\pi_\lambda(b)\neq0\}\xrightarrow{\sim}\mathcal B(\lambda)_{\lambda-\alpha}$.

(d) **Large-weight form.** If all $\lambda(h_j)$, $j\in I$, are sufficiently large compared with $\alpha$, then $\pi_\lambda$ induces isomorphisms $\mathcal L(\infty)_{-\alpha}\xrightarrow{\sim}\mathcal L(\lambda)_{\lambda-\alpha}$ and $\mathcal B(\infty)_{-\alpha}\xrightarrow{\sim}\mathcal B(\lambda)_{\lambda-\alpha}$, and the congruences of (b) for such $\lambda$ are the computation used inside the grand loop to deduce the general case; the general statements (a)-(c) hold for every $\lambda\in P^+$, without a largeness hypothesis.

**Choice.** The axiom of choice is declared via [[def-axiom-of-choice]]: clause (c) is clause N(r) of [[thm-grand-loop-existence-of-highest-weight-crystal-bases]], whose proof applies clause J(r), and J(r) is where the AC-dependent form comparison of [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]] is used. Clauses (a), (b) and (d) are themselves choice-free.

## Facts & Assumptions

**Given:** A dominant integral weight $\lambda$, a simple root height $\alpha\in Q_+$, and the lattices, residue bases and operators of [[def-kashiwara-lattices-lambda-and-infinity]].

[F1] The grand loop proves, for every $r$ and hence for $r=\operatorname{ht}(\alpha)$: clause L(r), $\pi_\lambda(\mathcal L(\infty)_{-\alpha})=\mathcal L(\lambda)_{\lambda-\alpha}$; clause M(r), $\tilde f_i(Pv_\lambda)\equiv(\tilde f_iP)v_\lambda\bmod q\mathcal L(\lambda)$ for $P\in\mathcal L(\infty)_{-\alpha+\alpha_i}$; clause O(r), $\pi_\lambda(\tilde e_ib)=\tilde e_i\pi_\lambda(b)$ for surviving $b$; and clause N(r), the bijection on surviving residue elements; the proof of N(r) applies J(r), which uses the negative-half form comparison; the large-weight case gives a lattice isomorphism and a residue bijection in the degree ([[thm-grand-loop-existence-of-highest-weight-crystal-bases]], [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]], [[def-axiom-of-choice]]).

[F2] The projection $\pi_\lambda$ is $\mathbb Q(q)$-linear with $\pi_\lambda(\mathbf 1)=v_\lambda$, and on the negative half $\tilde e_i\tilde f_i=\mathrm{id}$; on $V(\lambda)$ the operators are the string operators with $\ker\tilde e_i=\ker E_i$ and $\ker\tilde f_i=\ker F_i$ ([[def-kashiwara-crystal-operators]], [[thm-the-i-string-decomposition-of-the-negative-half]]).

[F3] $\mathcal L(\lambda)$ and $\mathcal L(\infty)$ are free $A_0$-modules with the graded decompositions of [[def-kashiwara-lattices-lambda-and-infinity]], and the residue bases $\mathcal B(\lambda),\mathcal B(\infty)$ are $\mathbb Q$-bases of the respective crystal limits ([[def-crystal-lattice-and-crystal-basis]]).

## Proof

**Proof technique:** direct. Each clause is the corresponding clause of the grand loop at height $r=\operatorname{ht}(\alpha)$.

1.1 Clause (a). Since the grand loop holds for every $r$, clause L(r) at $r=\operatorname{ht}(\alpha)$ is exactly $\pi_\lambda(\mathcal L(\infty)_{-\alpha})=\mathcal L(\lambda)_{\lambda-\alpha}$. [F1]

1.2 Clause (b). Clause M(r) is the first congruence, and clause O(r) is the second equality in the crystal limit; the equivalence with $\tilde f_i\pi_\lambda=\pi_\lambda\tilde f_i$ on the residue classes of $\mathcal B(\infty)_{-\alpha+\alpha_i}$ follows because both sides of the congruence are computed modulo $q\mathcal L(\lambda)$ and $\tilde f_i$ preserves both lattices by their defining lowering-word construction. [F1, F2]

1.3 Clause (c). Clause N(r) states precisely that $\pi_\lambda$ induces a bijection from the surviving elements of $\mathcal B(\infty)_{-\alpha}$ onto $\mathcal B(\lambda)_{\lambda-\alpha}$; its proof applies J(r) and therefore the AC-dependent form comparison, while nothing in (a), (b) or (d) needs it. [F1, F3]

1.4 Clause (d). For large weights the grand-loop large-weight computation gives that $\pi_\lambda$ is an isomorphism on the component and a bijection on its residue bases; those congruences are used as an input inside the loop to derive the general clauses, and the present clauses (a)-(c) do not assume the largeness. [F1]

2.1 Choice. All congruences in (a), (b) and (d) take place between finitely generated $A_0$-modules and use only the operators and the string decomposition, so they are choice-free; clause (c) inherits the declared axiom of choice through J(r) and the negative-half form comparison. [F1, F3] ∎
