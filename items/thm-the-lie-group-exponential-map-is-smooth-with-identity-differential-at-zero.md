---
id: thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero
kind: theorem
title: The Lie-group exponential map is smooth with identity differential at zero
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-exponential-map-of-a-lie-group", "prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle", "thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields", "thm-fundamental-theorem-on-flows", "prop-exponential-scales-one-parameter-subgroups", "def-one-parameter-subgroup-of-a-lie-group", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 3.7(1) and proof, printed pages 30–31
    - title: Brian Conrad and Aaron Landesman, Compact Lie Groups
      url: https://math.stanford.edu/~conrad/249BW16Page/handouts/249B_2016.pdf
      locator: Appendix G.1 complete smoothness proof, printed pages 182–183
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For a finite-dimensional real Lie group $G$,
the exponential map

$$\exp_G:\mathfrak g=T_eG\longrightarrow G$$

is smooth, satisfies $\exp_G(0)=e$, and, under the canonical identification
$T_0\mathfrak g\simeq\mathfrak g$, has differential

$$d(\exp_G)_0=\operatorname{id}_{\mathfrak g}.$$

The countable-choice assumption is used exactly through the supplied smooth
tangent-bundle trivialization and one-parameter-subgroup results.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a finite-dimensional real Lie group $G$
with identity $e$ and Lie algebra $\mathfrak g=T_eG$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] The exponential map is the total map
$\exp_G(Y)=\gamma_Y(1)$. [[def-exponential-map-of-a-lie-group]].

[F3] Assuming $\mathrm{AC}_\omega$, the map
$(g,Y)\mapsto d(L_g)_eY$ is a smooth vector-bundle trivialization
$G\times\mathfrak g\to TG$.
[[prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle]].

[F4] Assuming $\mathrm{AC}_\omega$, every $Y\in\mathfrak g$ determines a
unique global one-parameter subgroup $\gamma_Y$, and
$\gamma_Y'(t)=d(L_{\gamma_Y(t)})_eY$.
[[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]].

[F5] The maximal flow of a smooth vector field has open domain, is smooth on
that domain, and is uniquely determined by its maximal integral curves.
[[thm-fundamental-theorem-on-flows]].

[F6] The scaling identity is
$\gamma_Y(a)=\exp_G(aY)$ for all $a\in\mathbb R$.
[[prop-exponential-scales-one-parameter-subgroups]].

[F7] Every one-parameter subgroup satisfies $\gamma(0)=e$.
[[def-one-parameter-subgroup-of-a-lie-group]].

[F8] Differentials of smooth maps obey the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

## Proof

**Proof technique:** direct.

1.1 On the product manifold $M=G\times\mathfrak g$, define $$\mathcal X_{(g,Y)}:=\bigl(d(L_g)_eY,0\bigr)\in T_gG\times T_Y\mathfrak g=T_{(g,Y)}M.$$ Its first component is the smooth map supplied by [F3], and its second component is the zero field on the vector space $\mathfrak g$. Hence $\mathcal X$ is a smooth vector field on $M$. [F3, construct]

2.1 For $(g,Y)\in M$, define $c_{g,Y}:\mathbb R\to M$ by $c_{g,Y}(t)=(g\gamma_Y(t),Y)$. By [F4], [F8], and $L_g\circ L_{\gamma_Y(t)}=L_{g\gamma_Y(t)}$, $$c_{g,Y}'(t)=\bigl(d(L_g)_{\gamma_Y(t)}d(L_{\gamma_Y(t)})_eY,0\bigr)=\bigl(d(L_{g\gamma_Y(t)})_eY,0\bigr)=\mathcal X_{c_{g,Y}(t)}.$$ Thus $c_{g,Y}$ is an integral curve of $\mathcal X$ through $(g,Y)$ and is defined on all of $\mathbb R$. Every maximal integral curve of $\mathcal X$ is therefore global. By [F5], the global flow is smooth and is $$\Psi(t,(g,Y))=\bigl(g\gamma_Y(t),Y\bigr).$$ [F3, F4, F5, F8, step 1.1, algebra]

3.1 Restricting this smooth flow to $(t,(e,Y))$ and projecting to $G$ shows that $(t,Y)\mapsto\gamma_Y(t)$ is smooth. Restricting further to $t=1$ gives the map $Y\mapsto\gamma_Y(1)=\exp_G(Y)$, which is smooth by [F2]. [F2, F5, step 2.1]

4.1 By [F6] with $a=0$ and [F7], $\exp_G(0)=\gamma_X(0)=e$. Fix $X\in\mathfrak g$ and consider $q_X(a)=aX$. Applying [F8] to $\exp_G\circ q_X$ and then [F6] gives $$d(\exp_G)_0(X)=\left.\frac{d}{da}\right|_{a=0}\exp_G(aX)=\left.\frac{d}{da}\right|_{a=0}\gamma_X(a)=\gamma_X'(0)=X.$$ Hence $d(\exp_G)_0$ is the identity under $T_0\mathfrak g\simeq\mathfrak g$. [F4, F6, F7, F8, step 3.1, algebra]

5.1 Lie groups are nonempty and boundaryless. If $\dim G=0$, then $\mathfrak g=0$, the exponential maps the unique vector to $e$, and its differential is the identity of the zero space; in dimension one the proof is unchanged. The global curves in step 2.1 remove finite-time endpoint issues. No metric or nondegeneracy condition occurs. The only choice use is the stated $\mathrm{AC}_\omega$, inherited through [F2]--[F4] and especially the smooth tangent-bundle trivialization [F3]; forming one product field and restricting its flow adds no choice. No biconditional is asserted. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 3.1, step 4.1] ∎
