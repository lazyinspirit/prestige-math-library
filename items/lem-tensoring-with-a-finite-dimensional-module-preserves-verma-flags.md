---
id: lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags
kind: lemma
title: "Finite-dimensional tensoring preserves Verma flags"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-verma-flag-and-its-multiplicities
  - def-verma-module
  - def-weight-and-weight-space-of-a-lie-algebra-representation
  - lem-finite-semisimple-pbw-and-highest-weight-construction
  - prop-tensoring-with-a-finite-dimensional-module-preserves-category-o
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-7.md
      - research/frontier-38-owner-30-dispatch/reader-reader-7.result.json
      - research/frontier-38-owner-30-step5-hash-7-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-7-5a-decisions.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Lemma 3.5 and Construction 3.1"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§3, Construction 3.1, Lemma 3.5 and proof (projection formula), printed pp. 4-5 (full text read at harvest)"
    - title: "Dennis Gaitsgory, Geometric Representation Theory (Fall 2005), Lemma 4.24 and its proof"
      url: https://people.mpim-bonn.mpg.de/gaitsgde/267y/catO.pdf
      locator: "§4.23, Lemma 4.24 with proof (filtration of M_lambda tensor V by Vermas), printed p. 24 (full text read at harvest)"
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Cor. 20.5(i) and Sec. 20.2"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§20.2, standard filtrations and their behavior under tensoring, printed pp. 101-103 (full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $E$ be a
finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-module with weight
multiplicities $\dim E_\eta$
([[def-weight-and-weight-space-of-a-lie-algebra-representation]]). For every
weight $\mu$, the object $E\otimes\Delta(\mu)$ has a finite Verma flag
([[def-verma-flag-and-its-multiplicities]]) whose factors are $\Delta(\mu+\eta)$,
the factor $\Delta(\mu+\eta)$ occurring $\dim E_\eta$ times; the factors can be
ordered so that a real-linear height $\ell$ with $\ell(\alpha_i)=1$ is nonincreasing.

Consequently, if $X\in\mathcal O$ has a finite Verma flag with multiplicities
$(X:\Delta(\nu))$, then $E\otimes X$ has a finite Verma flag and
$$(E\otimes X:\Delta(\mu))=\sum_\eta\dim E_\eta\,(X:\Delta(\mu-\eta)).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-module $E$ with weight spaces $E_\eta$, and weights $\mu,\nu$.

[F1] $M(\lambda)=U(\mathfrak g)\otimes_{U(\mathfrak b)}\mathbb C_\lambda$ and $\Delta(\lambda)=M(\lambda)$; a finite Verma flag has finite length, factors $\Delta(\mu_i)$, and the multiplicities count the factors appearing, additively along a top step $0\to K\to X\to\Delta(\mu)\to0$ ([[def-verma-module]], [[def-verma-flag-and-its-multiplicities]]).

[F2] PBW gives a right $U(\mathfrak b)$-module isomorphism $U(\mathfrak g)\cong U(\mathfrak n^-)\otimes U(\mathfrak b)$, so $U(\mathfrak g)$ is free as a right $U(\mathfrak b)$-module and induction is exact ([[lem-finite-semisimple-pbw-and-highest-weight-construction]]).

[F3] The weight set of $E$ is finite, $\mathfrak h$ preserves each $E_\eta$, and a positive-root vector sends $E_\eta$ into $E_{\eta+\alpha}$ ([[def-weight-and-weight-space-of-a-lie-algebra-representation]]). Fix a real-linear functional $\ell$ on the underlying real vector space of $\mathfrak h^*$ with $\ell(\alpha_i)=1$ for all simple roots. It exists by their linear independence and is strictly positive on $Q^+\setminus\{0\}$.

[F4] The functor $M\mapsto E\otimes M$ with diagonal action is exact and maps $\mathcal O$ into itself ([[prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]]).

## Proof

**Proof technique:** direct: filter the finite-dimensional $\mathfrak b$-module $E\otimes\mathbb C_\mu$ by one-dimensional quotients and induce, then extend to general $X$ by exactness.

1.1 For any $\mathfrak b$-module $V$, define $\Psi:U(\mathfrak g)\otimes_{U(\mathfrak b)}(E\otimes V)\to E\otimes(U(\mathfrak g)\otimes_{U(\mathfrak b)}V)$ by $\Psi(u\otimes(e\otimes v))=u\cdot(e\otimes(1\otimes v))$, using the diagonal action. For $x\in\mathfrak b$, the identity $x\cdot(e\otimes(1\otimes v))=xe\otimes(1\otimes v)+e\otimes(1\otimes xv)$ proves balancing, and the definition is $\mathfrak g$-linear. Under [F2]'s PBW identifications both sides are filtered by the degree in $U(\mathfrak n^-)$. Expanding the diagonal action of a negative-root monomial, its leading term acts entirely on the induced factor, so the associated graded map is the flip $u\otimes e\otimes v\mapsto e\otimes u\otimes v$. It is bijective. Induction on finite degree then proves that $\Psi$ itself is bijective: lift a leading term and subtract to prove surjectivity; a nonzero highest-degree term cannot map to zero, proving injectivity. [F2, algebra, construct]

2.1 Enumerate the weights of $E$ in nonincreasing $\ell$-order and choose a basis in each weight space. The initial spans in $E\otimes\mathbb C_\mu$ are $\mathfrak b$-submodules: Cartan acts by scalars on each weight, and positive-root operators raise $\ell$, landing in already included spaces. Their successive quotients are $\mathbb C_{\mu+\eta}$, once for each basis vector of $E_\eta$. Exact induction in [F2], followed by the tensor identity of step 1.1, gives a Verma flag of $E\otimes\Delta(\mu)$ with factors $\Delta(\mu+\eta)$ of multiplicity $\dim E_\eta$, in nonincreasing $\ell$-order. [F1, F2, F3, step 1.1, algebra]

3.1 For a Verma-filtered $X$ induce on the flag length. For $X=0$ both sides vanish. For the top step $0\to K\to X\to\Delta(\nu)\to0$ of a flag, exactness of $E\otimes-$ by [F4] gives an exact sequence $0\to E\otimes K\to E\otimes X\to E\otimes\Delta(\nu)\to0$; by step 2.1 and the induction hypothesis $E\otimes K$ has a finite Verma flag with multiplicities $(E\otimes K:\Delta(\mu))=\sum_\eta\dim E_\eta(K:\Delta(\mu-\eta))$, and adjoining the flag of $E\otimes\Delta(\nu)$ with multiplicities $\dim E_\eta\delta_{\nu,\mu-\eta}$ gives a finite Verma flag of $E\otimes X$. Since multiplicity is additive along the resulting top step and $(X:\Delta(\mu-\eta))=(K:\Delta(\mu-\eta))+\delta_{\nu,\mu-\eta}$ by [F1], the formula $(E\otimes X:\Delta(\mu))=\sum_\eta\dim E_\eta(X:\Delta(\mu-\eta))$ follows. [F1, F4, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 prove the single-Verma statement and the consequence for a general Verma-filtered $X$, completing the proof. [step 2.1, step 3.1] ∎
