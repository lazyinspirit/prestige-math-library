---
id: cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes
title: "Cohomology over a field is dual to homology for finite-dimensional complexes"
kind: corollary
status: published
origin: pipeline
deps: ["def-evaluation-map-from-cohomology-to-hom-of-homology", "thm-steinitz-exchange"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

For a chain complex of finite-dimensional vector spaces over $k$, evaluation gives $H^n\operatorname{Hom}_k(C,k)\cong\operatorname{Hom}_k(H_nC,k)$.

## Proof

**Given:** A chain complex $C$ of finite-dimensional vector spaces over $k$, with $Z_n=\ker d_n$, $B_n=\operatorname{im}d_{n+1}$, and $H_nC=Z_n/B_n$.

[L1] Evaluation sends the cohomology class of a cocycle $f:C_n\to k$ to the functional $[z]\mapsto f(z)$ on $H_nC$ ([[def-evaluation-map-from-cohomology-to-hom-of-homology]]).

[L2] In a finite-dimensional vector space, every basis of a subspace extends to a basis of the whole space by finitely many exchanges; hence a linear functional on a subspace extends to the whole space by assigning zero on the added basis vectors ([[thm-steinitz-exchange]]).

1.1 Fix $n$. A cochain $f:C_n\to k$ is a cocycle exactly when $f(B_n)=0$, because its coboundary is $f\circ d_{n+1}$. Such an $f$ restricts to $Z_n$ and factors through $Z_n/B_n=H_nC$, giving the evaluation map [L1]. A coboundary $h\circ d_n$ vanishes on $Z_n$, so evaluation is well defined on cohomology classes. [given, L1, algebra]

2.1 Given $\lambda\in\operatorname{Hom}_k(H_nC,k)$, compose it with $Z_n\twoheadrightarrow H_nC$ to get a functional on $Z_n$ that vanishes on $B_n$. Extend it to $f:C_n\to k$ by [L2]. Then $f(B_n)=0$, so $f$ is a cocycle, and its evaluation is $\lambda$. Thus evaluation is surjective. [L2, step 1.1, construct]

2.2 Suppose a cocycle $f$ evaluates to zero. Then $f|_{Z_n}=0$. Define $h:B_{n-1}=\operatorname{im}d_n\to k$ by $h(d_nx)=f(x)$; if $d_nx=d_nx'$, then $x-x'\in Z_n$, so this is well defined. Extend $h$ to $\widetilde h:C_{n-1}\to k$ by [L2]. Now $f=\widetilde h\circ d_n$, so $f$ is a coboundary and its cohomology class is zero. Thus evaluation is injective. [L2, step 1.1, construct]

3.1 Steps 2.1 and 2.2 show that the evaluation map is a bijective linear map, hence the claimed isomorphism. Each basis extension involved only the two fixed finite-dimensional spaces $C_n$ and $C_{n-1}$; no choice principle or general UCT is used. [step 2.1, step 2.2] ∎
