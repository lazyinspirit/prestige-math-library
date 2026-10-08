---
id: def-cg-real-coxeter-form-and-reflection
kind: definition
title: "The real Coxeter form, its radical, reflections, and form-preserving maps"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps: [def-hh-coxeter-matrix-word-group-and-length, def-function-space, def-linear-map, def-bilinear-symmetric-skew-and-alternating-forms, thm-bilinear-forms-correspond-to-linear-maps-into-the-dual, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-definiteness-inertia-and-signature-data-over-the-reals, def-sine-and-cosine-by-power-series, def-pi-via-first-positive-cosine-zero, thm-reals-ordered-field, thm-quarter-turn-values-and-shift-formulas]
justified_by: [lem-cg-reflection-form-invariance-and-rank-two-orders]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press; author's full institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "\u00a76.12, printed pp. 116\u2013117: (6.32)\u2013(6.33), the cosine matrix, the form $B_M$ and the reflections $\\rho_i(x)=x-2B_M(e_i,x)e_i$"
    - title: "Anders Bj\u00f6rner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "\u00a74.2, printed pp. 93\u201394 and 97: (4.10)\u2013(4.14) and (4.21), the bilinear form $(\\alpha_s\\mid\\alpha_{s'})=-k_{s,s'}/2$ and the standard symmetric choice $-\\cos(\\pi/m(s,s'))$"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised 2014 text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "\u00a71.1, printed p. 10, and Appendix A.1, printed p. 131: the Coxeter matrix convention $m_{s,s}=1$, $m_{s,s'}\\ge2$, and the invariant form $(e_s,e_{s'})=-\\cos\\frac{\\pi}{m_{s,s'}}$"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $S$ be a finite set and let $m$ be a Coxeter matrix on $S$, so that $m(s,s)=1$ and $m(s,t)=m(t,s)\in\{2,3,\dots\}\cup\{\infty\}$ for $s\ne t$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

**(1) The space and its distinguished functions.** Let $V:=\mathbb R^S$ be the real vector space of all functions $S\to\mathbb R$, with pointwise operations ([[def-function-space]]); it is a vector space over the ordered field $\mathbb R$ ([[thm-reals-ordered-field]]). Write $u(s)$ for the value of $u$ at $s$ and put $e_s(s):=1$, $e_s(t):=0$ for $t\ne s$.

**(2) The Coxeter form.** For finite $m(s,t)$ put $c(s,t):=\cos(\pi/m(s,t))$ ([[def-sine-and-cosine-by-power-series]], [[def-pi-via-first-positive-cosine-zero]]) and for $m(s,t)=\infty$ put $c(s,t):=1$; then $c(s,t)=c(t,s)$ and $c(s,s)=\cos\pi=-1$. The **Coxeter form** $B$ is the unique symmetric bilinear form on $V$ with $B(e_s,e_t)=-c(s,t)$ for all $s,t\in S$; in particular $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$, while $B(e_s,e_t)=-1$ when $m(s,t)=\infty$ ([[def-bilinear-symmetric-skew-and-alternating-forms]], [[thm-bilinear-forms-correspond-to-linear-maps-into-the-dual]]). **No positive definiteness, definiteness or nondegeneracy of $B$ is presumed**: $\operatorname{rad}(B):=\{u:B(u,v)=0\text{ for all }v\in V\}$ may be nonzero ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]), and the form may be indefinite ([[def-definiteness-inertia-and-signature-data-over-the-reals]]). A linear map $g:V\to V$ is **$B$-preserving** when $B(gu,gw)=B(u,w)$ for all $u,w\in V$.

**(3) Reflections.** For $a\in V$ with $B(a,a)\ne0$ define the **reflection with normal $a$** by $$r_a(v):=v-\frac{2B(v,a)}{B(a,a)}a .$$ The definition asserts neither that $r_a$ is linear or an involution nor that $\ker B(-,a)=\{v:B(v,a)=0\}$ is a hyperplane; these are proved in [[lem-cg-reflection-form-invariance-and-rank-two-orders]]. When $B(a,a)=0$ the symbol $r_a$ is not defined.
