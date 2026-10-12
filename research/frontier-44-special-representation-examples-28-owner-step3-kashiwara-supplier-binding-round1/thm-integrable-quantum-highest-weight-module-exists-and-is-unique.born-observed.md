---
id: thm-integrable-quantum-highest-weight-module-exists-and-is-unique
kind: theorem
title: "The integrable quantum highest weight module exists and is unique"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kac-moody-integral-and-dominant-integral-weights, def-positive-negative-and-toral-quantum-subalgebras, def-quantum-verma-module-and-simple-highest-weight-quotient, def-quantum-weight-module-and-integrability, lem-cartan-projection-constructs-the-quantum-verma-contravariant-form, lem-local-q-one-deformation-proves-integrable-highest-weight-universality, lem-quantum-highest-weight-serre-quotient-is-integrable, thm-quantized-sl-two-string-formulas, thm-triangular-decomposition-of-a-quantized-enveloping-algebra]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§2, printed pp. 6-8, Proposition 2.2 and its proof: for $\\lambda\\in P^+$ the highest vector satisfies $f_i^{\\lambda(h_i)+1}v_\\lambda=0$, and every highest weight module whose highest vector satisfies these relations is isomorphic to $V(\\lambda)$."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.2.1, printed pp. 315-317: the finite-dimensional quotients of the Verma module for dominant integral weights and the classical character comparison."
    - title: "Math 263C Quantum Groups (Stanford, 2022), lecture slides 'Lusztig's quantum group. Tilting modules. The Fusion Category in Action'"
      url: "http://sporadic.stanford.edu/quantum/lecture16.pdf"
      locator: "Slides on the restricted quantum group: the divided-power Serre quotient and its integrable simple modules."
---

## Statement

Let $\lambda\in P$ be a dominant integral label weight, put
$m_i:=\langle\lambda,h_i\rangle\ge0$, and let $M(\lambda)$ be the quantum Verma
module with highest vector $v_\lambda$
([[def-quantum-verma-module-and-simple-highest-weight-quotient]],
[[def-kac-moody-integral-and-dominant-integral-weights]]).

(i) The quotient $\tilde L(\lambda):=M(\lambda)/\sum_iU_q(\mathfrak g)F_i^{(m_i+1)}v_\lambda$
is nonzero, has finite-dimensional label weights and support
$\lambda-Q_+$, is integrable, and equals the canonical simple highest weight
module $L(\lambda)$, which is simple also as an ordinary (not assumed graded)
$U_q(\mathfrak g)$-module.

(ii) **Universality.** Every integrable cyclic highest weight module $V$ of
highest weight $\lambda$ with highest vector $v\ne0$ receives a
$U_q(\mathfrak g)$-module map $\tilde L(\lambda)\to V$ with
$\bar v_\lambda\mapsto v$, and this map is unique; every nonzero such $V$ is
isomorphic to $L(\lambda)$.

(iii) Its character equals the classical integrable highest weight character of
the explicitly regularized realization of the datum. No global
$\mathbb Z[q,q^{-1}]$-freeness and no crystal or global basis is used.

## Facts & Assumptions

**Given:** The dominant integral weight $\lambda$, the Verma module and its
highest vector, the quotient $\tilde L(\lambda)$, and the integral form used by
the deformation lemma.

[F1] The Serre quotient lemma: $\tilde L(\lambda)$ is nonzero with nonzero top
class $\bar v_\lambda$, has finite-dimensional label weights and support in
$\lambda-Q_+$, is integrable, and every integrable cyclic highest weight module
of highest weight $\lambda$ is a quotient of $\tilde L(\lambda)$; its proof
does not use commutation of distinct adjacent-root divided powers
([[lem-quantum-highest-weight-serre-quotient-is-integrable]](i)-(iii)).

[F2] The local deformation lemma: every nonzero graded quotient of
$\tilde L(\lambda)$ with nonzero highest line has the classical simple
character, and consequently $\tilde L(\lambda)\cong L(\lambda)$ for the simple
graded quotient $L(\lambda)$ of $M(\lambda)$; this uses the DVR
$\mathbb Q[q]_{(q-1)}$ and no global freeness
([[lem-local-q-one-deformation-proves-integrable-highest-weight-universality]](a),(b)).

[F3] The Cartan projection lemma: the normalized homogeneous contravariant
form on $M(\lambda)$ descends to $L(\lambda)=M(\lambda)/N(\lambda)$ with
$N(\lambda)$ the largest proper graded submodule, and the maximum-height
raising argument proves that $L(\lambda)$ has no proper nonzero ordinary
submodule, i.e. it is simple as a $U_q(\mathfrak g)$-module without a grading
hypothesis
([[lem-cartan-projection-constructs-the-quantum-verma-contravariant-form]]).

[F4] $M(\lambda)$ has the universal property that every highest weight module
of weight $\lambda$ with highest vector $v$ receives a unique map
$M(\lambda)\to V$ with $v_\lambda\mapsto v$, and the map is surjective when $V$
is cyclic; the top label space of a highest weight module is one-dimensional
([[def-quantum-verma-module-and-simple-highest-weight-quotient]],
[[def-quantum-weight-module-and-integrability]]).



## Verification

**Proof technique:** assemble the construction and universality from the Serre quotient, identify the quotient with the simple module by the local q=1 deformation, and transfer ordinary simplicity from the Cartan projection lemma.

1.1 Construction, support and integrability. The quotient $\tilde L(\lambda)$ of the statement is the quotient constructed in [F1] (the sum of the vectors $F_i^{(m_i+1)}v_\lambda$ and their $U_q$-translates is the displayed submodule); hence it is nonzero, has one-dimensional top label space with generator $\bar v_\lambda\ne0$, has finite-dimensional label weights, support contained in $\lambda-Q_+$, and is integrable. This proves the first part of (i). [F1, F2, algebra]

1.2 Identification with the simple module and character. The simple graded quotient $L(\lambda)$ of $M(\lambda)$ is a nonzero graded quotient of $\tilde L(\lambda)$ with nonzero highest line: the image of $\bar v_\lambda$ generates it, and a nonzero highest vector of weight $\lambda$ cannot lie in the kernel, since the kernel is a graded submodule not containing the top label space. By [F2] both $\tilde L(\lambda)$ and $L(\lambda)$ have the classical simple character, so the surjection $\tilde L(\lambda)\to L(\lambda)$ is injective on every finite-dimensional label space, hence an isomorphism; $\tilde L(\lambda)\cong L(\lambda)$ and the character statement (iii) follow. [F1, F2, algebra]

1.3 Ordinary simplicity. By [F3], $L(\lambda)$ has no proper nonzero ordinary submodule. Since $\tilde L(\lambda)\cong L(\lambda)$, the same holds for $\tilde L(\lambda)$; this completes (i). [F2, F3, algebra]

2.1 Universality. Let $V$ be an integrable cyclic highest weight module of highest weight $\lambda$ with highest vector $v\ne0$. By [F4] there is a unique $U_q(\mathfrak g)$-module map $M(\lambda)\to V$ with $v_\lambda\mapsto v$, and it is surjective because $v$ generates $V$. By [F1](iii) the integrability of $V$ forces this map to kill the defining submodule of $\tilde L(\lambda)$: namely the kernel contains each $F_i^{(m_i+1)}v_\lambda$, since the image $F_i^{(m_i+1)}v$ must vanish (the minimal $t_i$ with $F_i^{t_i}v=0$ equals $m_i+1$ by the rank-one string computation used in [F1]); hence the map factors through $\tilde L(\lambda)\to V$. This map is unique because it is determined on the cyclic vector, and it sends the class of $v_\lambda$ to $v$. If $V\ne0$, then by step 1.3 the source $\tilde L(\lambda)\cong L(\lambda)$ is simple, so the surjection is an isomorphism: $V\cong L(\lambda)$. This proves (ii). [F1, F2, F3, F4, algebra] ∎
