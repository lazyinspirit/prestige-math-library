---
id: cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p
kind: corollary
title: Sobolev maxima and minima form a lattice
status: published
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, def-positive-and-negative-parts-of-a-function, def-max-min, def-ordered-field, lem-weak-derivative-is-independent-of-lp-representatives, lem-weak-derivative-linearity-locality-and-commutation, cor-positive-negative-part-and-truncation-calculus-in-w-one-p, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-composition-with-borel-functions-preserves-measurability, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one, def-calligraphic-l-p-on-a-measure-space, def-l-p-space-as-a-quotient-by-null-functions, def-l-infinity-on-a-measure-space, prop-essential-supremum-is-attained-as-the-least-essential-bound, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 2
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 2 §2.2, Remark 2.4(3), printed p. 31 (max{u,v} and min{u,v} in W^{1,p}, the two gradient formulas, and Du=Dv a.e. on {u=v})
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §§3.1–3.5 (weak derivatives, Sobolev spaces, lattice operations on Sobolev functions)
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011)
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
      locator: Chapter 8 §8.2 (absolute value and truncation exercises, from which the lattice identities follow)
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 2 §2.2, Remark 2.4(3)
  (printed p. 31), where the lattice property of $W^{1,p}$ is recorded:
  $\max\{u,v\}$ and $\min\{u,v\}$ lie in $W^{1,p}$, the gradients are
  $Du$ and $Dv$ on the respective comparison regions, and $Du=Dv$ almost
  everywhere on $\{u=v\}$. The source derives the rule from
  $\max\{u,v\}=\tfrac12(u+v+|u-v|)$ and the absolute-value rule; the proof
  below instead uses the positive-part calculus of the preceding corollary
  together with the pointwise identities $u\vee v=v+(u-v)^+$ and
  $u\wedge v=u-(u-v)^+$, as the design directs.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3,
  §§3.1–3.5, for the weak-derivative convention, the Sobolev spaces and
  the lattice operations on Sobolev functions.
- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial
  Differential Equations*, Chapter 8 §8.2, where the corresponding
  truncation and absolute-value rules appear as exercises; the argument
  below is reconstructed from the library interfaces cited in the Facts
  block and does not import those statements.

## Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$n\ge1$, let $1\le p\le\infty$, and let $u,v\in W^{1,p}(\Omega;\mathbb R)$
be real Sobolev classes. On measurable representatives define
$u\vee v:=\max\{u,v\}$ and $u\wedge v:=\min\{u,v\}$ pointwise; the
resulting almost-everywhere classes are well defined. Then
$u\vee v\in W^{1,p}(\Omega)$ and $u\wedge v\in W^{1,p}(\Omega)$, and for
every $i\in\{1,\ldots,n\}$, almost everywhere on $\Omega$,
$$D_i(u\vee v)=1_{\{u>v\}}D_iu+1_{\{u\le v\}}D_iv,\qquad D_i(u\wedge v)=1_{\{u<v\}}D_iu+1_{\{u\ge v\}}D_iv.$$
Moreover the two gradients agree on the coincidence set: on $\{u=v\}$ one
has $D_i(u\vee v)=D_i(u\wedge v)$ almost everywhere, equivalently
$D_iu=D_iv$ almost everywhere there. If $\Omega=\varnothing$ every
assertion holds vacuously, the endpoints $p=1$ and $p=\infty$ are
included, and no assertion is made about the pointwise derivative of an
arbitrary representative.

## Facts & Assumptions

**Given:** The Axiom of Choice; an open $\Omega\subseteq\mathbb R^n$ with $n\ge1$; an exponent $1\le p\le\infty$; real Sobolev classes $u,v\in W^{1,p}(\Omega;\mathbb R)$; and the pointwise lattice operations of the Statement, applied to measurable representatives.

[F1] $W^{1,p}(\Omega;\mathbb K)$ is the set of classes $u\in L^p(\Omega;\mathbb K)$ such that for every first-order multi-index there is an $L^p$ class with a locally integrable representative satisfying the signed test identity for every test function, and each such derivative determines one class $D_iu$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] For a function $f$ one has $f^+=\max\{f,0\}$, $f^-=\max\{-f,0\}$, $f=f^+-f^-$ and $|f|=f^++f^-$ pointwise ([[def-positive-and-negative-parts-of-a-function]]).

[F3] If $S\subseteq\mathbb R$ and $m\in\mathbb R$, then $m$ is a maximum of $S$ when $m\in S$ and $s\le m$ for every $s\in S$, and a minimum of $S$ when $m\in S$ and $m\le s$ for every $s\in S$; a set has at most one maximum and at most one minimum, written $\max S$ and $\min S$ ([[def-max-min]]).

[F4] An ordered field is a field with a positive cone $P$ satisfying trichotomy and closure, with $a<b$ defined by $b-a\in P$ and $a\le b$ by $a<b$ or $a=b$ ([[def-ordered-field]]).

[F5] Assume Countable Choice. If two locally integrable classes agree almost everywhere, then one is a weak $\alpha$-derivative of a class if and only if the other is; in particular this applies to representatives of $L^p(\Omega)$ classes for every $1\le p\le\infty$, which are locally integrable on each compact test support ([[lem-weak-derivative-is-independent-of-lp-representatives]]).

[F6] Assume Countable Choice. Weak differentiation is complex-linear and passes to open subsets: if $v_j=D^\alpha u_j$ weakly for $j=1,2$ and $a,b\in\mathbb C$, then $av_1+bv_2=D^\alpha(au_1+bu_2)$ weakly ([[lem-weak-derivative-linearity-locality-and-commutation]]).

[F7] Assume the Axiom of Choice. For $w\in W^{1,p}(\Omega;\mathbb R)$ one has $w^+\in W^{1,p}(\Omega)$ with $D_iw^+=1_{\{w>0\}}D_iw$ almost everywhere, and $D_iw=0$ almost everywhere on $\{w=0\}$ ([[cor-positive-negative-part-and-truncation-calculus-in-w-one-p]]).

[F8] If $f,g:X\to\overline{\mathbb R}$ are measurable on a measurable space, then $\max(f,g)$, $\min(f,g)$, $f+g$ (where defined) and the pointwise product $fg$ are measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[F9] If $f$ is measurable and $g$ is Borel measurable on its codomain, then $g\circ f$ is measurable ([[thm-composition-with-borel-functions-preserves-measurability]]).

[F10] For nonnegative measurable $f\le g$ one has $\int f\le\int g$, and $\int cf=c\int f$ for $c\ge0$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F11] For $1\le p<\infty$ the class $\mathcal L^p(\mu)$ is a real vector space under pointwise addition and scalar multiplication, and so is $L^\infty(\mu)$ ([[thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one]]).

[F12] For $1\le p<\infty$, $\mathcal L^p(\mu)$ consists of the measurable $f$ with $\int|f|^p\,d\mu<\infty$, and $L^p(\mu)$ denotes the quotient of $\mathcal L^p(\mu)$ by the almost-everywhere-zero functions ([[def-calligraphic-l-p-on-a-measure-space]]).

[F13] On a measure space, $L^p(\mu)$ for $0<p<\infty$ and for $p=\infty$ is the set of almost-everywhere classes of $\mathcal L^p(\mu)$ respectively $L^\infty(\mu)$, and for $1\le p\le\infty$ the displayed quotient agrees with the usual quotient-vector-space construction ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F14] $L^\infty(\mu)=\{f:X\to\mathbb R: f$ measurable and $\|f\|_\infty<\infty\}$ for a measure space $(X,\mathcal A,\mu)$ ([[def-l-infinity-on-a-measure-space]]).

[F15] If $f$ is measurable with $\|f\|_\infty<\infty$, then $|f|\le\|f\|_\infty$ almost everywhere; and if $|f|\le M$ almost everywhere, then $\|f\|_\infty\le M$ ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F16] In ZF the Axiom of Choice implies Countable Choice and the prescribed-start form of Dependent Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F17] The Axiom of Choice asserts a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct: write $u\vee v=v+(u-v)^+$ and $u\wedge v=u-(u-v)^+$, apply the positive-part calculus of the preceding corollary to $u-v$, and use the level-set identity on $\{u=v\}$ to make the two indicator conventions agree almost everywhere.

1.1 By [F16] the Axiom of Choice [F17] yields Countable Choice and Dependent Choice in ZF, so the choice hypotheses of [F5] and [F6] and the Axiom-of-Choice hypothesis of [F7] are in force. Fix one measurable representative $\hat u$ of $u$, one measurable representative $\hat v$ of $v$, and for each $i$ one measurable representative $u_i$ of $D_iu$ and one $v_i$ of $D_iv$; these are finitely many selections and need no choice principle. The classes here are the almost-everywhere classes of [F12] and [F13], and by [F5] every one of these representatives is locally integrable on each compact subset of $\Omega$. [F5, F12, F13, F16, F17, given]

1.2 For all real $a,b$ one has $\max\{a,b\}=b+(a-b)^+$ and $\min\{a,b\}=a-(a-b)^+$: if $a\ge b$ then $a-b\ge0$ by [F4], so $(a-b)^+=\max\{a-b,0\}=a-b$ by [F2] and [F3], giving $b+(a-b)=a=\max\{a,b\}$ and $a-(a-b)=b=\min\{a,b\}$; and if $a<b$ then $a-b<0$, so $(a-b)^+=0$ and the two right-hand sides are $b$ and $a$. [F2, F3, F4, given]

2.1 Put $w:=u-v$. By step 1.1 the classes $u,v,D_iu,D_iv$ are locally integrable, so [F6] with $a=1$, $b=-1$ gives $D_iu-D_iv=D_i(u-v)$ weakly on $\Omega$, hence almost everywhere on $\Omega$; and $w\in L^p(\Omega)$ with each $D_iw\in L^p(\Omega)$ by [F11], [F12] and [F13]. By [F1] this says $w\in W^{1,p}(\Omega;\mathbb R)$ with the weak derivatives $D_iw=D_iu-D_iv$. [F1, F6, F11, F12, F13, step 1.1, given]

3.1 The corollary [F7] applied to the class $w=u-v$ of step 2.1 gives $w^+\in W^{1,p}(\Omega)$ with $D_iw^+=1_{\{w>0\}}D_iw$ almost everywhere on $\Omega$, and $D_iw=0$ almost everywhere on $\{w=0\}$, so $1_{\{w=0\}}D_iw=0$ and $D_iu=D_iv$ almost everywhere on $\{u=v\}=\{w=0\}$. [F7, step 2.1, given]

4.1 Define the classes $u\vee v:=v+w^+$ and $u\wedge v:=u-w^+$. Both lie in $W^{1,p}(\Omega)$ with weak derivatives $D_i(u\vee v)=D_iv+D_iw^+$ and $D_i(u\wedge v)=D_iu-D_iw^+$ almost everywhere, by [F6] and [F1]; and by step 1.2 the pointwise identities $\max\{\hat u,\hat v\}=\hat v+(\hat u-\hat v)^+$ and $\min\{\hat u,\hat v\}=\hat u-(\hat u-\hat v)^+$ hold everywhere on $\Omega$ with $(\hat u-\hat v)^+=\max\{\hat u-\hat v,0\}$ by [F2]. Since $\hat u-\hat v$ represents $w$, the function $(\hat u-\hat v)^+$ represents $w^+$, so $\max\{\hat u,\hat v\}$ and $\min\{\hat u,\hat v\}$ are representatives of $u\vee v$ and of $u\wedge v$; they are measurable by [F8], so [F12] and [F13] make the pointwise maximum and minimum legitimate almost-everywhere classes with the same members as $u\vee v$ and $u\wedge v$. [F1, F2, F6, F8, F12, F13, step 1.2, step 2.1, step 3.1, given]

5.1 First derivative formula. By steps 2.1 and 3.1 the class $D_i(u\vee v)$ has the representative $v_i+1_{\{\hat w>0\}}(u_i-v_i)$ almost everywhere, where $\hat w:=\hat u-\hat v$; on $\{\hat w>0\}$ this equals $u_i$ and on $\{\hat w\le0\}$ it equals $v_i$, so it agrees pointwise everywhere with $1_{\{\hat w>0\}}u_i+1_{\{\hat w\le0\}}v_i$, which is measurable by [F8] and [F9]. Each product lies in $\mathcal L^p(\Omega)$: for $p<\infty$ one has $|1_{\{\hat w>0\}}u_i|\le|u_i|$ pointwise and $\int_\Omega|u_i|^p<\infty$, so [F10] gives $\int_\Omega|1_{\{\hat w>0\}}u_i|^p\le\int_\Omega|u_i|^p<\infty$, and similarly for $v_i$; for $p=\infty$ one has $|1_{\{\hat w>0\}}u_i|\le|u_i|\le\|u_i\|_\infty$ almost everywhere by [F15], so $\|1_{\{\hat w>0\}}u_i\|_\infty\le\|u_i\|_\infty<\infty$ and the product lies in $L^\infty(\Omega)$ by [F14]. Hence both products and their sum lie in $L^p(\Omega)$ by [F11], [F12] and [F13], and therefore $D_i(u\vee v)=1_{\{u>v\}}D_iu+1_{\{u\le v\}}D_iv$ almost everywhere on $\Omega$. [F8, F9, F10, F11, F12, F13, F14, F15, step 2.1, step 3.1, step 4.1, given]

6.1 Second derivative formula. Likewise $D_i(u\wedge v)$ has the representative $u_i-1_{\{\hat w>0\}}(u_i-v_i)$, which agrees pointwise everywhere with $1_{\{\hat w\le0\}}u_i+1_{\{\hat w>0\}}v_i$; the same measurability and $L^p$ membership arguments as in step 5.1 apply, and on $\{\hat w=0\}$ step 3.1 gives $u_i=v_i$ almost everywhere, so this representative also agrees almost everywhere with $1_{\{\hat w<0\}}u_i+1_{\{\hat w\ge0\}}v_i$. Therefore $D_i(u\wedge v)=1_{\{u<v\}}D_iu+1_{\{u\ge v\}}D_iv$ almost everywhere on $\Omega$. [F8, F9, F10, F11, F12, F13, F14, F15, step 2.1, step 3.1, step 4.1, given]

7.1 Coincidence set. On $\{u=v\}=\{\hat w=0\}$, step 3.1 gives $D_iu=D_iv$ almost everywhere, while the formulas of steps 5.1 and 6.1 give $D_i(u\vee v)=D_iv$ and $D_i(u\wedge v)=D_iu$ there; hence $D_i(u\vee v)=D_i(u\wedge v)$ almost everywhere on $\{u=v\}$, and the two gradient descriptions agree there. [step 3.1, step 5.1, step 6.1, given]

8.1 Degenerate cases and accounting. If $\Omega=\varnothing$ the only classes are zero and every assertion holds vacuously. If $u=v$, then $w=0$, $w^+=0$, $u\vee v=u\wedge v=u$, the two formulas both reduce to $D_iu=D_iv$ almost everywhere, and step 7.1 is consistent with that. The endpoints $p=1$ and $p=\infty$ are included: step 3.1 uses [F7] for every $1\le p\le\infty$, and step 5.1 separates the finite and infinite exponent cases only through [F10], [F14] and [F15]. The case $n=1$ is included because no step uses more than one coordinate direction. Only Countable Choice (through [F5] and [F6]) and the Axiom of Choice (through [F7]) are used, the representative selections of step 1.1 are finite, and no further selection is made. ∎ [F5, F6, F7, F10, F14, F15, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, given]
