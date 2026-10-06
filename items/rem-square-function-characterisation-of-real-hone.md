---
id: rem-square-function-characterisation-of-real-hone
kind: remark
title: "Recorded: the square-function characterisation of the real Hardy space H1"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-real-hardy-space-by-a-radial-maximal-function, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 7.30(a): $|f|_{H^1}:=|f|_{L^1}+|Sf|_{L^1}\\sim|f|_{L^1}+\\sum_j|R_jf|_{L^1}\\sim\\|\\sup_{t>0}|P_t*f|\\|_{L^1}<\\infty$, and (b) $\\int f=0$ for $f\\in H^1$, printed p. 40"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Remark 6.9(c) on the failure of $\\dot F^{0,2}_1=H^1$ and Proposition 7.32 (nontangential characterisation), printed pp. 26, 40"
proved_here: false
verification:
  precheck: n/a
external_dependency:
  source_url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
  exact_statement: "Proposition 7.30(a): the classical H^1(R^n) is the proper subspace of L^1 consisting of functions with |f|_{H^1} := |f|_{L^1} + |Sf|_{L^1} ~ |f|_{L^1} + sum_{j=1}^d |R_j f|_{L^1} ~ || sup_{t>0}|P_t*f| ||_{L^1} < infinity, where S is the homogeneous Littlewood-Paley square function and the R_j are the Riesz transforms; part (b): elements of H^1 satisfy int f dx=0. Proposition 7.32 gives an equivalent nontangential maximal-function characterization."
  local_proof_attempt: "Not attempted on this page. The equivalence needs the Riesz-transform characterisation, the Poisson maximal function and the tent-space/atomic decomposition of H^1, none of which is developed here; this page proves only the strict-range L^p square-function theorem and defines the Lusin area function."
  necessity: "Records the classical homogeneous square-function characterization and mean-zero property, while preventing it from being confused with an endpoint theorem for the distinct inhomogeneous square function proved on this page. This is a recorded external result, not a proof supplier."
---

## Statement

*Recorded, not proved here.* Assume Countable Choice ([[def-countable-choice]])
for the Hardy-space norm conventions. Let $S_{\mathrm{hom}}$ denote a classical
homogeneous dyadic Littlewood-Paley square function, with scales indexed over
$j\in\mathbb Z$. For $f\in L^1(\mathbb R^n)$, the classical
characterisation is
$$f\in H^1(\mathbb R^n)\quad\Longleftrightarrow\quad S_{\mathrm{hom}}f\in L^1(\mathbb R^n),$$
with equivalent norms
$$\|f\|_{H^1}\asymp\|f\|_{L^1}+\|S_{\mathrm{hom}}f\|_{L^1}$$
on $H^1$. In particular every $f\in H^1(\mathbb R^n)$ has
$\int_{\mathbb R^n}f=0$. Here $H^1$ is the real Hardy space of
[[def-real-hardy-space-by-a-radial-maximal-function]]. The scales and square
function here are homogeneous; the strict-range theorem on this page uses a
different, inhomogeneous square function. This recorded characterization does
not assert an endpoint theorem for that inhomogeneous square function. The
source also gives an equivalent nontangential maximal-function
characterization of $H^1$.

This item is a recorded external result, not a proof supplier.
