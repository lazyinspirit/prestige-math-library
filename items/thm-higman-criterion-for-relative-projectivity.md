---
id: thm-higman-criterion-for-relative-projectivity
kind: theorem
title: "Higman's criterion characterizes relative projectivity through the relative trace idempotent test"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-projectivity, thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules, prop-induced-module-decomposes-over-a-left-transversal]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "J. MacQuarrie, Modular Representations of Profinite Groups"
      url: "https://eprints.maths.manchester.ac.uk/1262/1/relprojpaperB.pdf"
---

## Statement

Let $H\le G$ be finite groups and let $M$ be a $kG$-module. Fix a left
transversal $T$ for $G/H$. For $\alpha\in\operatorname{End}_{kH}(M)$, define
its **relative trace**

$$ \operatorname{Tr}_H^G(\alpha)(m):=\sum_{t\in T} t\cdot\alpha(t^{-1}\cdot m). $$

Then $M$ is relatively $H$-projective if and only if
$\operatorname{id}_M=\operatorname{Tr}_H^G(\alpha)$ for some
$\alpha\in\operatorname{End}_{kH}(M)$.

## Facts & Assumptions

**Given:** A subgroup $H\le G$, a $kG$-module $M$, and a left transversal $T$ for $G/H$.

[F1] Relative $H$-projectivity means being a direct summand of an induced
module ([[def-relative-projectivity]]).

[L1] Induction is left adjoint to restriction
([[thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]]).

[L2] Evaluation on a left transversal identifies an induced module with a
finite direct sum of copies of the source module
([[prop-induced-module-decomposes-over-a-left-transversal]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon:\operatorname{Ind}_H^G\operatorname{Res}_H^G M\to M$ be the adjunction counit, written on the transversal model as $\varepsilon(f)=\sum_{t\in T} t\cdot f(t)$. By [L1] and [L2], a $kG$-module is relatively $H$-projective exactly when this counit splits. [F1, L1, L2, given, algebra]

2.1 Suppose first that $M$ is relatively $H$-projective. By step 1.1 choose a $kG$-map $s:M\to\operatorname{Ind}_H^G\operatorname{Res}_H^G M$ with $\varepsilon s=\operatorname{id}_M$. Define $\alpha(m):=s(m)(1)$. For $h\in H$, one has $s(hm)(1)=h\cdot s(m)(1)$ because $s$ is $G$-equivariant, so $\alpha\in\operatorname{End}_{kH}(M)$. Then $\operatorname{Tr}_H^G(\alpha)(m)=\sum_{t\in T} t\cdot s(t^{-1}m)(1)=\sum_{t\in T} t\cdot s(m)(t)=\varepsilon(s(m))=m$. Hence $\operatorname{id}_M=\operatorname{Tr}_H^G(\alpha)$. [F1, L1, L2, step 1.1, algebra]

3.1 Conversely, suppose $\operatorname{id}_M=\operatorname{Tr}_H^G(\alpha)$ for some $\alpha\in\operatorname{End}_{kH}(M)$. Define $s(m)(g):=\alpha(g^{-1}m)$ for $g\in G$. Because $\alpha$ is $H$-linear, $s(m)(gh)=h^{-1}s(m)(g)$, so $s(m)$ lies in the induced module. The rule $m\mapsto s(m)$ is $G$-equivariant. Applying the counit of step 1.1 gives $\varepsilon(s(m))=\sum_{t\in T} t\cdot\alpha(t^{-1}m)=\operatorname{Tr}_H^G(\alpha)(m)=m$. So $s$ splits the counit, and step 1.1 makes $M$ relatively $H$-projective. [L1, L2, step 1.1, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 prove the equivalence. For $H=G$, the transversal is $\{1\}$ and the trace condition reduces to $\alpha=\operatorname{id}_M$, as expected. [step 2.1, step 3.1] ∎
