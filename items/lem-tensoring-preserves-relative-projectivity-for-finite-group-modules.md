---
id: lem-tensoring-preserves-relative-projectivity-for-finite-group-modules
kind: lemma
title: Tensoring preserves relative projectivity for finite-group modules
deps: ["def-relative-projectivity", "lem-relative-projectivity-mackey-intersections-for-finite-modules", "thm-krull-schmidt-for-finite-dimensional-kg-modules", "thm-green-vertex-source-existence-and-conjugacy"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Exercise
        31(a) as used in Theorem 40.5, §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let $H$ be finite and $X,Y$ finite-dimensional $kH$-modules, with diagonal action on $X\otimes_kY$. If $X$ is relatively $R$-projective for $R\le H$, so is $X\otimes_kY$. In characteristic $p$, if no indecomposable summand of $X$ has a vertex containing an $H$-conjugate of a $p$-subgroup $Q$, the same holds for $X\otimes_kY$. No AC is required.

## Facts & Assumptions

**Given:** The stated finite-dimensional modules and subgroups.

[F1] Relative projectivity is [[def-relative-projectivity]]; only its induced-summand definition is used, not its arbitrary-dimensional AC clause.

[F2] [[lem-relative-projectivity-mackey-intersections-for-finite-modules]] supplies finite inducing witnesses via its counit splitting, preservation of splittings, finite summand extraction and vertex containment.

[F3] [[thm-krull-schmidt-for-finite-dimensional-kg-modules]] supplies finite indecomposable decompositions.

[F4] [[thm-green-vertex-source-existence-and-conjugacy]] supplies vertices and their conjugacy for nonzero indecomposables.

## Proof

1.1 By F1 and F2 take a finite-dimensional $kR$-module $W$ and split $X$ from $\operatorname{Ind}_R^H W$; one may take $W=\operatorname{Res}_R^H X$ using F2's counit splitting. Tensor the inclusion and retraction with $1_Y$. Their composite remains $1_{X\otimes Y}$, and both are $H$-linear for the diagonal actions. Thus it suffices to identify the tensor of the inducing module. [F1, F2, algebra]

2.1 Define $$\Phi((h\otimes w)\otimes y)=h\otimes(w\otimes h^{-1}y),\qquad \Psi(h\otimes(w\otimes y))=(h\otimes w)\otimes hy.$$ These map between $(kH\otimes_{kR}W)\otimes_kY$ and $kH\otimes_{kR}(W\otimes_k\operatorname{Res}_R^H Y)$. The balancing relation $hr\otimes w=h\otimes rw$ is respected by $\Phi$: moving $r$ from the first tensor factor on its right acts diagonally on $w\otimes r^{-1}h^{-1}y$, giving $rw\otimes h^{-1}y$. The same identity verifies $\Psi$ is balanced. Applying $a\in H$ on the left replaces $h,y$ by $ah,ay$, leaving $h^{-1}y$ unchanged, so $\Phi$ is $H$-linear. The displayed formulas compose to the identity in both orders. Therefore the tensor in step 1.1 is a summand of an $R$-induced module, proving relative $R$-projectivity. [F1, step 1.1, algebra]

3.1 For the consequence, decompose $X=\bigoplus_jX_j$ using F3 and choose a vertex $R_j$ for each nonzero indecomposable by F4. Step 2.1 makes $X_j\otimes Y$ relatively $R_j$-projective. Any indecomposable summand $Z$ of their finite sum is a summand of one term by F2. F2 then puts a vertex $T$ of $Z$ inside an $H$-conjugate of $R_j$. If $T$ contained a conjugate of $Q$, so would that conjugate of $R_j$, contradicting the hypothesis. This proves the consequence. If either tensor factor is zero the sum has no indecomposable summands. For $R=H$ the assertion is automatic, and for $Q=1$ its hypothesis forces $X=0$. All decompositions, bases and subgroup choices here are finite. [F2, F3, F4, step 2.1, algebra] ∎
