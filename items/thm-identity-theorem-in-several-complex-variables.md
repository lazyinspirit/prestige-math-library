---
id: thm-identity-theorem-in-several-complex-variables
kind: theorem
title: "A holomorphic function vanishing on a nonempty open subset of a domain vanishes identically"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-holomorphic-functions-in-several-variables-are-smooth, thm-connectedness-characterisations, def-connected-space, def-balls-and-polydiscs-in-complex-euclidean-space, def-ck-and-multi-index-notation-in-several-variables, def-holomorphic-function-in-several-complex-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, Thm. 1.2.7"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
    - title: "M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables, Thm. 22(7)"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
pipeline_run: null
---

## Statement

Let $m \ge 1$, let $U \subseteq \mathbb{C}^m$ be a nonempty connected open set,
and let $f : U \to \mathbb{C}$ be holomorphic
([[def-holomorphic-function-in-several-complex-variables]]). If there is a
nonempty open set $W \subseteq U$ such that $f(z) = 0$ for every $z \in W$, then
$f \equiv 0$ on $U$.

This is the several-variable identity theorem at the strength the page supports:
the hypothesis is a nonempty **open** set of zeros. An accumulation point of the
zero set is neither assumed nor sufficient in several variables; the companion
page records that stronger one-variable statement as false here.

## Facts & Assumptions

**Given:** A nonempty connected open set $U \subseteq \mathbb{C}^m$, a holomorphic function $f : U \to \mathbb{C}$, and a nonempty open set $W \subseteq U$ on which $f = 0$.

[L1] Holomorphic functions of several variables are smooth; every point $a\in U$ has a polydisc $\Delta_r(a)\subseteq U$ on which $$f(z)=\sum_\alpha c_\alpha(z-a)^\alpha,\qquad c_\alpha=\frac{\partial^\alpha_zf(a)}{\alpha!};$$ and all mixed complex derivatives are holomorphic ([[cor-holomorphic-functions-in-several-variables-are-smooth]]).

[L2] A connected space has no nontrivial clopen subsets ([[thm-connectedness-characterisations]], [[def-connected-space]]).

[L3] The mixed complex derivative notation $\partial_z^\alpha$ and the zero-order identity $\partial_z^0f=f$ are those in the power-series and smoothness statement [L1]; [[def-ck-and-multi-index-notation-in-several-variables]] supplies the underlying multi-index arithmetic.

[L4] Polydiscs in $\mathbb{C}^m$ are the coordinatewise discs of [[def-balls-and-polydiscs-in-complex-euclidean-space]].

## Proof

**Proof technique:** direct.

1.1 For every multi-index $\alpha$, the derivative $\partial_z^\alpha f$ is holomorphic and therefore continuous on $U$ by [L1]; since $f=0$ on the open set $W$, every derivative of $f$ is also $0$ on $W$, so the set $A:=\{z\in U:\partial_z^\alpha f(z)=0\text{ for every }\alpha\}$ contains $W$ and is therefore nonempty. [given, L1, L3]

2.1 The set $A$ is closed in $U$, because it is the intersection over all multi-indices $\alpha$ of the closed zero sets of the continuous functions $\partial_z^\alpha f$. [step 1.1]

2.2 The set $A$ is open in $U$: if $a\in A$, choose a smaller polydisc $\Delta\subseteq U$ centred at $a$; then every coefficient $\partial^\alpha f(a)/\alpha!$ in the power-series expansion of $f$ on $\Delta$ is $0$, so [L1] gives $f=0$ on $\Delta$, and hence every derivative vanishes on $\Delta$ as well, which means $\Delta\subseteq A$. [step 1.1, L1, L4]

3.1 The set $A$ is a nonempty subset of $U$ that is both open in $U$ and closed in $U$, so connectedness and [L2] force $A=U$; in particular $f=\partial_z^0 f$ vanishes at every point of $U$, hence $f\equiv0$ on $U$. [step 2.1, step 2.2, L2, L3] ∎

## Remarks

- **Why the hypothesis is open-set vanishing and not an accumulation point.** In one complex variable, accumulation of zeros implies equality by local factorisation and isolated zeros. In several variables the zero set of a nonzero holomorphic function can contain whole complex hypersurfaces, so the open-set hypothesis is the honest form at this stage.

- **What the proof really uses.** The proof needs only two page-level tools: holomorphic smoothness and the local power-series expansion. Once every derivative at one point vanishes, the power series on a smaller polydisc is identically zero, and connectedness propagates that local vanishing to the whole set.
