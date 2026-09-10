---
id: thm-equivalent-characterizations-of-semisimple-rings
kind: theorem
title: "Equivalent module-theoretic characterizations of semisimple rings"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semisimple-ring, thm-equivalent-characterizations-of-semisimple-modules, thm-submodules-and-quotients-of-semisimple-modules, cor-every-module-is-a-quotient-of-a-free-module, def-split-short-exact-sequence, thm-splitting-lemma-for-modules, def-projective-module, thm-projective-module-characterizations, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-choice-contract-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, for a unital ring $R$ the following are equivalent: ${}_R R$ is semisimple; every left $R$-module is semisimple; every short exact sequence of left $R$-modules splits; and every left $R$-module is projective. See [[def-semisimple-ring]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A unital ring $R$ is semisimple when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings. ([[def-semisimple-ring]]).

[L2] Assuming the Axiom of Choice, every submodule and every quotient of a semisimple module is semisimple. ([[thm-submodules-and-quotients-of-semisimple-modules]]).

[L3] For every left $R$-module $M$, the free module $R^{(M)}$ on its underlying set admits a canonical surjection $\varepsilon_M:R^{(M)}\to M$, determined by $\varepsilon_M(e_m)=m$. Consequently $M\cong R^{(M)}/\ker\varepsilon_M$. ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[L4] In a short exact sequence $$0\to A\xrightarrow iB\xrightarrow pC\to0,$$ a section of $p$ is a homomorphism $s:C\to B$ with $p\circ s=\operatorname{id}_C$, and a retraction of $i$ is a homomorphism $r:B\to A$ with $r\circ i=\operatorname{id}_A$. ([[def-split-short-exact-sequence]]).

[L5] For a short exact sequence $$0\to A\xrightarrow iB\xrightarrow pC\to0,$$ the following are equivalent: 1. $p$ has a section $s:C\to B$; 2. $i$ has a retraction $r:B\to A$; 3. there is an isomorphism $\Phi:A\oplus C\to B$ with $\Phi(a,0)=i(a)$ and $p(\Phi(a,c))=c$. ([[thm-splitting-lemma-for-modules]]).

[L6] A left $R$-module $P$ is projective if it has the lifting property for epimorphisms: whenever $q:E\to M$ is a surjective module homomorphism and $f:P\to M$ is a module homomorphism, there exists a module homomorphism $\tilde f:P\to E$ such that $q\circ\tilde f=f$ (def-module-homomorphism-kernel-image-and-cokernel, def-injection-surjection-bijection). ([[def-projective-module]]).

[L7] For a left $R$-module $P$, assertions 1 to 3 below are equivalent without choice. Under the Axiom of Choice, they are also equivalent to assertion 4: 1. $P$ is projective; 2. every short exact sequence $0\to K\to E\to P\to0$ splits; 3. $\operatorname{Hom}_R(P,-)$ takes every short exact sequence to a short exact sequence; 4. $P$ is a direct summand of a free module. ([[thm-projective-module-characterizations]]).

[L8] Assuming the Axiom of Choice, a module is semisimple if and only if every submodule has a complementary submodule. ([[thm-equivalent-characterizations-of-semisimple-modules]]).

[L9] Assume [[def-axiom-of-choice]]. Its actual use here is the AC-qualified
semisimple complement and submodule/quotient results [L8] and [L2], whose
proofs use Zorn's lemma. The canonical free cover [L3] and the
splitting/projectivity equivalence in clauses 1–2 of [L7] are choice-free.

## Proof

**Proof technique:** direct.

1.1 If ${}_RR$ is semisimple, fix a decomposition $R=\bigoplus_{j\in J}S_j$ into simple left submodules. In the free module $R^{(X)}$, put a copy of each $S_j$ in each coordinate $x\in X$. These simple submodules sum directly: any element has finite coordinate support and in each coordinate a finite decomposition in the $S_j$, uniquely. Thus $R^{(X)}$ is semisimple. Every left module is a quotient of such a free module by [L3], hence is semisimple by the AC-qualified [L2]. [L1, L2, L3, L9, given, algebra]

2.1 If every left module is semisimple, [L8] under [L9] gives every submodule a complement, and [L5] makes every short exact sequence split. If every short exact sequence splits, clauses 1–2 of [L7] make every module projective. If every module is projective, apply those same clauses to every quotient map $M\to M/U$; its splitting gives a complement to $U$ by [L5], so [L8] under [L9] makes every module semisimple. [L5, L7, L8, L9, step 1.1, given, algebra]

3.1 Applying the universal module condition to the left regular module recovers the first condition, and every clause is left-handed as asserted. This proves the stated claim. [step 2.1, given, algebra] ∎

## Remarks

These are left-module characterizations. Applying them to right modules
requires a separately justified opposite-ring or left/right semisimplicity
interface; injectivity is not an additional conclusion of this statement.
