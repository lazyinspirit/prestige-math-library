---
id: rem-cassels-tate-alternating-condition-for-polarized-abelian-varieties
kind: remark
title: "Exact alternation criterion for a polarized Cassels–Tate pairing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-cassels-tate-pairing-between-dual-abelian-varieties
  - def-cassels-tate-polarization-obstruction-class
  - def-polarization-of-an-abelian-variety
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen and Michael Stoll, The Cassels–Tate Pairing on Polarized Abelian Varieties, §§4–6"
      url: "https://math.mit.edu/~poonen/papers/sha.pdf"
      locator: "Printed pp. 8–12: definition of c_lambda, Theorem 5, and Corollaries 6–7."
verification: {}
---

## Remark

Assume AC and DC, and assume the Cassels–Tate pairing exists. Let $K$ be a global field, $A/K$ an
abelian variety, and $\lambda:A\to A^\vee$ a polarization arising from a
Galois-invariant Néron–Severi class. Let $c_\lambda\in\Sha(A^\vee/K)$ be its
obstruction class, viewed as the corresponding fppf torsor class. The induced
pairing
$$
\langle x,y\rangle_\lambda:=\langle x,\lambda y\rangle_{CT}
\quad\text{on }\Sha(A/K)
$$
is antisymmetric, and it is alternating if and only if
$c_\lambda\in\Sha(A^\vee/K)_{\mathrm{div}}$, the maximal divisible
subgroup. A $K$-rational divisor inducing $\lambda$ is sufficient for
alternation because it makes $c_\lambda=0$.

## Remark references

[[thm-cassels-tate-pairing-between-dual-abelian-varieties|Cassels–Tate pairing and its divisible kernels]]

[[def-cassels-tate-polarization-obstruction-class|Polarization obstruction class]]

[[def-polarization-of-an-abelian-variety|Polarization of an abelian variety]]

## Facts & Assumptions

**Given:** AC, DC, a global field $K$, an abelian variety $A/K$, a polarization
$\lambda:A\to A^\vee$, and the Cassels–Tate pairing of the Statement.

[A1] AC and DC are inherited from the global-place and duality conventions.
([[def-axiom-of-choice]], [[def-dependent-choice]],
[[thm-cassels-tate-pairing-between-dual-abelian-varieties]])

[F1] The left and right kernels of the pairing between
$\Sha(A/K)$ and $\Sha(A^\vee/K)$ are their maximal divisible subgroups.
([[thm-cassels-tate-pairing-between-dual-abelian-varieties]])

[F2] $c_\lambda$ is the torsor class of the fiber of the relative Picard
sheaf over the Néron–Severi class $\lambda$; if that class has a
$K$-rational lift to the Picard sheaf, then the fiber has a $K$-point and
its torsor class is zero.
([[def-cassels-tate-polarization-obstruction-class]])

[L1] Poonen–Stoll's Theorem 5 states
$\langle a,\lambda a+c_\lambda\rangle=0$ for every
$a\in\Sha(A/K)$; their Corollary 6 states that the induced pairing is
antisymmetric. ([Poonen–Stoll, §§5–6](https://math.mit.edu/~poonen/papers/sha.pdf))

## Proof

**Proof technique:** use the polarization identity to identify the diagonal
of the induced pairing with pairing against the obstruction class.

**Given:** [A1], [F1], [F2], and the Poonen–Stoll identity [L1].

1.1 By [L1] and bilinearity,
$\langle a,\lambda a\rangle_{CT}=-\langle a,c_\lambda\rangle_{CT}$
for every $a\in\Sha(A/K)$. The right side is a homomorphism in $a$, so the
diagonal map $a\mapsto\langle a,a\rangle_\lambda$ is a homomorphism.
[F1, L1, given, algebra]

1.2 For a bilinear form $B$, the identity
$B(a+b,a+b)-B(a,a)-B(b,b)=B(a,b)+B(b,a)$ holds by bilinearity. Since the
diagonal map of $B=\langle\ ,\ \rangle_\lambda$ is a homomorphism by step
1.1, this sum is zero for every $a,b$; hence the induced pairing is
antisymmetric. [step 1.1, algebra]

2.1 The induced pairing is alternating exactly when
$\langle a,a\rangle_\lambda=0$ for every $a$. By step 1.1 this is
equivalent to $\langle a,c_\lambda\rangle_{CT}=0$ for every $a$, which
means precisely that $c_\lambda$ is in the right kernel of the pairing in
[F1]. That kernel is $\Sha(A^\vee/K)_{\mathrm{div}}$.
[F1, step 1.1, algebra]

2.2 If a $K$-rational divisor induces $\lambda$, it supplies a
$K$-rational lift of the corresponding Néron–Severi class to the Picard
sheaf. By [F2] the torsor $P_\lambda$ has a $K$-point, so
$c_\lambda=0$. The criterion of step 2.1 then gives alternation.
[F2, step 2.1, algebra] ∎

## Unresolved prerequisite

This derivation is conditional on the Cassels–Tate pairing supplier. Its current proof is escalated because the in-run global-flat-duality suppliers leave local-to-global boundary comparisons unresolved, and a local Tate-duality theorem for abelian varieties over all completions has no accepted in-run carrier.
