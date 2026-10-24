---
id: lem-localisation-identity-for-a-divergence-form-weak-solution
kind: lemma
title: "Localisation of a weak solution up to a bounded first-order term"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, lem-weak-leibniz-rule-with-a-smooth-factor, lem-elliptic-form-is-well-defined-and-bounded, def-wkp-zero-as-a-sobolev-closure, def-countable-choice, lem-cutoff-difference-quotient-commutator-estimate, thm-holder-inequality-for-integrals]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 6, proof of Theorem 1 (localisation by cutoffs), printed pp. 60-62 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, proof of Lemma 10.18 (reduction to localised problems), printed p. 242 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, let $L,a$ be as in
[[def-uniformly-elliptic-divergence-form-operator]], let
$f\in L^2_{\mathrm{loc}}(\Omega)$, let $u\in H^1(\Omega)$ be a local weak
solution of $Lu=f$
([[def-local-weak-solution-for-a-divergence-form-operator]]) and let
$\zeta\in C_c^\infty(\Omega;\mathbb R)$. Then $\zeta u\in H^1(\Omega)$ and
for every $v\in H^1_0(\Omega)$
$$a(\zeta u,v)=\int_\Omega\zeta f\,\overline v\,dx+\int_\Omega a^{ij}(D_j\zeta)\,u\,\overline{D_iv}\,dx+\int_\Omega b^i u\,(D_i\zeta)\,\overline v\,dx-\int_\Omega a^{ij}(D_i\zeta)\,D_ju\,\overline v\,dx .$$
The three commutator terms are bounded by
$(2nM_a+\sqrt n M_b)\|D\zeta\|_\infty\|u\|_{H^1(\Omega)}\|v\|_{H^1(\Omega)}$ and
form a bounded sesquilinear form in $(u,v)$ with coefficients of first and
zero order bounded by $3nM_a\|D\zeta\|_\infty$ and $\sqrt n M_b\|D\zeta\|_\infty$,
while $\zeta f\in L^2(\Omega)$ with
$\|\zeta f\|_{L^2}\le\|\zeta\|_\infty\|f\|_{L^2(\operatorname{supp}\zeta)}$.
The identity supplies an $H^{-1}$ commutator for bounded coefficients;
it does not by itself supply an $L^2$ datum for a regularity theorem.
If additionally $a^{ij}\in W^{1,\infty}(\Omega)$, the localized datum is
$$g_\zeta=\zeta f-(D_i\zeta)a^{ij}D_ju-D_i(a^{ij}uD_j\zeta)+b^iuD_i\zeta\in L^2(\Omega),$$
with $\|g_\zeta\|_2\le C(\|\zeta\|_{W^{2,\infty}},M_a,M_b,\|Da\|_\infty,n)
(\|f\|_{L^2(\operatorname{supp}\zeta)}+\|u\|_{H^1(\Omega)})$.
Expanding the divergence uses the second derivatives of $\zeta$ and the
first derivatives of $a$; these costs cannot be omitted.

## Facts & Assumptions

**Given:** Countable Choice; the open set $\Omega$; the scalar field $\mathbb K$; the operator $L$ and its form $a$ with ellipticity constant $\theta$ and bounds $M_a,M_b,M_c$; the datum $f\in L^2_{\mathrm{loc}}(\Omega)$; the local weak solution $u\in H^1(\Omega)$ of $Lu=f$; and the real cutoff $\zeta\in C_c^\infty(\Omega;\mathbb R)$.

[F1] Local weak solution: $a(u,v)=\int_\Omega f\overline v\,dx$ for every $v\in C_c^\infty(\Omega)$, and by the equivalences of the definition also for every $v\in H^1_0(\Omega_2)$ with $\Omega_2\Subset\Omega$ bounded open; the identity for a class $v$ supported in such an $\Omega_2$ reads $a(u,v)=\int_{\Omega_2}f\overline v\,dx$. ([[def-local-weak-solution-for-a-divergence-form-operator]])

[F2] The form and its coefficients: $a(w,z)=\int_\Omega\big(a^{ij}D_jw\,\overline{D_iz}+b^iD_iw\,\overline z+cw\,\overline z\big)dx$ with $|a^{ij}|\le M_a$, $|b^i|\le M_b$, $|c|\le M_c$ almost everywhere, and $a$ is linear in the first slot and conjugate-linear in the second. ([[def-uniformly-elliptic-divergence-form-operator]])

[F3] Weak Leibniz rule: if $w\in H^1(\Omega)$ and $\eta\in C_c^\infty(\Omega)$, then $\eta w\in H^1(\Omega)$ with $D_j(\eta w)=\eta D_jw+wD_j\eta$ a.e.; moreover $\eta w$ has compact support in $\Omega$. ([[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F4] The form is bounded on $H^1(\Omega)$: $|a(w,z)|\le(nM_a+nM_b+M_c)\|w\|_{H^1(\Omega)}\|z\|_{H^1(\Omega)}$, and the same bound holds on $H^1_0(\Omega)$. ([[lem-elliptic-form-is-well-defined-and-bounded]])

[F5] $H^1_0(\Omega)=\overline{C_c^\infty(\Omega)}$ in the $H^1(\Omega)$ norm; in particular $C_c^\infty(\Omega)\subseteq H^1_0(\Omega)$, and a function of $H^1(\Omega)$ with compact support in $\Omega$ lies in $H^1_0(\Omega)$. ([[def-wkp-zero-as-a-sobolev-closure]], [[lem-cutoff-difference-quotient-commutator-estimate]]).

## Proof

**Proof technique:** direct.

1.1 The localised classes: $\zeta u\in H^1(\Omega)$ with $D_j(\zeta u)=\zeta D_ju+u\,D_j\zeta$ a.e., and for $v\in H^1_0(\Omega)$ one has $\zeta v\in H^1_0(\Omega)$ with $D_i(\zeta v)=\zeta D_iv+v\,D_i\zeta$ a.e., since $\zeta v$ has compact support in $\Omega$. [F3, F5]

1.2 The weak equation may be tested with $\zeta v$: for $v\in C_c^\infty(\Omega)$ the product $\zeta v$ lies in $C_c^\infty(\Omega)$, so [F1] gives $a(u,\zeta v)=\int_\Omega f\,\overline{\zeta v}\,dx=\int_\Omega f\,\overline\zeta\,\overline v\,dx=\int_\Omega \zeta f\,\overline v\,dx$ because $\zeta$ is real-valued. [F1, F3, given]

1.3 The commutator terms are bounded: by [F2] and Hölder, $$\Big|\int_\Omega a^{ij}u\,(D_j\zeta)\,\overline{D_iv}\Big|\le nM_a\|D\zeta\|_\infty\|u\|_{L^2}\|Dv\|_{L^2},\qquad \Big|\int_\Omega b^iu\,(D_i\zeta)\,\overline v\Big|\le \sqrt n M_b\|D\zeta\|_\infty\|u\|_{L^2}\|v\|_{L^2},$$ and $$\Big|\int_\Omega a^{ij}D_ju\,(D_i\zeta)\,\overline v\Big|\le nM_a\|D\zeta\|_\infty\|Du\|_{L^2}\|v\|_{L^2},$$ so their sum is at most $(2nM_a+\sqrt n M_b)\|D\zeta\|_\infty\|u\|_{H^1}\|v\|_{H^1}$. Here $\sum_i|b^iD_i\zeta|\le |b|\,|D\zeta|\le\sqrt n M_b|D\zeta|$ follows from the component bounds in [F2]. Moreover $\zeta f\in L^2(\Omega)$ with $\|\zeta f\|_{L^2}\le\|\zeta\|_\infty\|f\|_{L^2(\operatorname{supp}\zeta)}$ by Hölder. [F2, algebra]

2.1 Expansion of the localised form. For $v\in C_c^\infty(\Omega)$, inserting the product rule of step 1.1 into the three terms of $a(\zeta u,v)$ gives $$a(\zeta u,v)=\int_\Omega\zeta\Big(a^{ij}D_ju\,\overline{D_iv}+b^iD_iu\,\overline v+cu\,\overline v\Big)dx+\int_\Omega a^{ij}u\,(D_j\zeta)\,\overline{D_iv}\,dx+\int_\Omega b^iu\,(D_i\zeta)\,\overline v\,dx .$$ [F2, step 1.1, algebra]

3.1 The first integral is $a(u,\zeta v)$ corrected by one Leibniz term: expanding $a(u,\zeta v)=\int_\Omega\big(a^{ij}D_ju\,\overline{D_i(\zeta v)}+b^iD_iu\,\overline{\zeta v}+cu\,\overline{\zeta v}\big)dx$ with $D_i(\zeta v)=\zeta D_iv+v\,D_i\zeta$ shows $$a(u,\zeta v)=\int_\Omega\zeta\Big(a^{ij}D_ju\,\overline{D_iv}+b^iD_iu\,\overline v+cu\,\overline v\Big)dx+\int_\Omega a^{ij}D_ju\,(D_i\zeta)\,\overline v\,dx ,$$ the coefficient $a^{ij}$ and the factor $D_ju$ being untouched by the conjugation because the Leibniz term sits in the second slot. Hence the first integral of step 2.1 equals $a(u,\zeta v)-\int_\Omega a^{ij}D_ju\,(D_i\zeta)\,\overline v\,dx$. [F2, F3, step 1.1, algebra]

4.1 Substituting step 3.1 into step 2.1 and inserting the weak equation of step 1.2 yields the displayed identity, first for $v\in C_c^\infty(\Omega)$: $$a(\zeta u,v)=\int_\Omega\zeta f\,\overline v\,dx+\int_\Omega a^{ij}u\,(D_j\zeta)\,\overline{D_iv}\,dx+\int_\Omega b^iu\,(D_i\zeta)\,\overline v\,dx-\int_\Omega a^{ij}D_ju\,(D_i\zeta)\,\overline v\,dx .$$ [step 1.2, step 2.1, step 3.1]

5.1 Both sides of the identity of step 4.1 are continuous in $v\in H^1_0(\Omega)$: the left side by [F4] and the right side by step 1.3. Since $C_c^\infty(\Omega)$ is dense in $H^1_0(\Omega)$ by [F5], the identity extends from the test functions of step 4.1 to every $v\in H^1_0(\Omega)$. [F4, F5, step 1.3, step 4.1]

6.1 The exact identity and the commutator-form bound follow from steps 1.3 and 5.1. With only bounded coefficients the flux term pairs an $L^2$ vector field with $Dv$, hence is an $H^{-1}$ functional. Under $a\in W^{1,\infty}$, the multiplier rule of [[lem-cutoff-difference-quotient-commutator-estimate]] gives $D_i(a^{ij}uD_j\zeta)=(D_ia^{ij})uD_j\zeta+a^{ij}D_iuD_j\zeta+a^{ij}uD_iD_j\zeta$. All terms are $L^2$, yielding the displayed $g_\zeta$ and its norm bound. No estimate for $L^2$ forcing is inferred from an $H^{-1}$ datum alone. [F2, step 1.3, step 5.1, algebra] ∎

## Source notes

Simon's Lecture 6 (printed pp. 60-62) localises the equation by replacing $u$ with a cutoff multiple, and Teschl's proof of Lemma 10.18 (printed p. 242) reduces to the localised classes $u_j=\zeta_ju$; both produce the commutator terms displayed here. The scaffold's display carried only the first two commutator terms and identified the $\zeta$-part of the expansion with $a(u,v)$; the correct test class is the localised test $\zeta v$, and the difference contributes the additional term $-\int_\Omega a^{ij}(D_i\zeta)D_ju\overline v$ shown in step 3.1. This term is exactly the first-order commutator that the difference-quotient and Caccioppoli arguments of this page absorb.
