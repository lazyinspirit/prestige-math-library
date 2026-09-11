---
id: "def-lc-complete-ultrafilters-and-measurable-cardinals"
kind: "definition"
title: "Complete ultrafilters and measurable cardinals"
deps: ["def-ultrafilter", "def-cardinal", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Chapter 10; Marks Section 23 pp.93–95
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

For an infinite cardinal kappa, a proper filter U on I is **kappa-complete** if $\bigcap_{\xi<\eta}A_\xi\in U$ whenever $\eta<\kappa$ and each $A_\xi\in U$. The intersection with no factors is I. **Countably complete** means closed under countable intersections, equivalently omega_1-complete in ZFC. Ultrafilter and nonprincipal use [[def-ultrafilter]]; cardinals use [[def-cardinal]].

A **measurable cardinal** is an uncountable kappa carrying a nonprincipal kappa-complete ultrafilter on the full power set of kappa. Such a U is a **normal measure** if every function $f:S\to\kappa$ with $S\in U$, $0\notin S$ and $f(\alpha)<\alpha$ is constant on a set in U contained in S. A set in U is called measure one.

The associated zero-one set function is $m_U(A)=1$ if $A\in U$, and zero otherwise. It is not the definition of a real-valued measurable cardinal. The fixed-index filter and normality conditions are formulas of ZF and do not themselves use Choice. General cardinality language and the large-cardinal implications on this page use ZFC, with [[def-axiom-of-choice]] explicit. No ultrafilter or measurable-cardinal existence is asserted.
