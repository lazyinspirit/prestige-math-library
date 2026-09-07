---
id: "thm-clifford-homogeneous-restriction-formula"
kind: "theorem"
title: "Clifford restriction formula"
status: "draft"
origin: "pipeline"
deps: ["lem-normal-restriction-constituents-form-one-conjugacy-orbit", "thm-characters-of-direct-sums-tensor-products-and-duals"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.1 p.2; tom Dieck §4.2 p.54"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
proof_strategy: direct
---

## Statement

Let $G$ be finite, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$, and $\chi\in\operatorname{Irr}(G\mid\theta)$. Put $I=I_G(\theta)$. There is a positive integer $e$ such that
$$ \operatorname{Res}_N^G\chi=e\sum_{gI\in G/I}{}^g\theta,\qquad \chi(1)=e[G:I]\theta(1). $$
Here $G/I$ indexes left cosets, one for each distinct conjugate. In particular, the entire restriction is isotypical precisely when $I=G$; it need not be isotypical in general.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] An irreducible complex module restricts to one orbit of normal types with equal positive multiplicities. ([[lem-normal-restriction-constituents-form-one-conjugacy-orbit]]).

[F2] For finite-dimensional complex representations of a finite group, the character of a direct sum is the sum of the characters. ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

## Proof

**Proof technique:** direct.

1.1 Let $V$ afford $\chi$. Its restriction is a direct sum with one common positive multiplicity $e$ for the orbit of $\theta$. The map $gI\mapsto{}^g\theta$ is well defined and bijective: two conjugates agree exactly when the corresponding elements differ on the right by an element of the stabilizer. Additivity of trace now gives the restriction formula. [F1, F2, given]

2.1 At the identity every conjugate takes value $\theta(1)$, giving the degree formula. Since $e>0$, precisely $[G:I]$ types occur. Thus an isotypical restriction forces $[G:I]=1$, hence $I=G$; conversely $I=G$ makes the sum a single type. The calculation includes index one and both N=1 and N=G. [step 1.1, algebra] ∎
