---
id: lem-quasi-compact-immersion-boundary-specialization
kind: lemma
title: A quasi-compact immersion with nonclosed image has a boundary specialization
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-locally-closed-immersion, def-quasi-compact-and-quasi-separated-morphism, def-quasi-compact-and-quasi-separated-scheme, def-scheme, def-morphism-affine-schemes-from-ring-map, def-principal-distinguished-subset-of-spectrum, cor-specialisation-order-is-prime-inclusion, cor-affine-scheme-quasi-compact, lem-base-change-quasi-compact-morphisms, thm-proper-ideal-contained-in-maximal-ideal, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.19.7 (tag 05JL, printed p.36) and Commutative Algebra, Lemma 10.41.5 (tag 00HY, printed p.96)"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "The Stacks Project, Commutative Algebra, printed p.96"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $j:Z\to T$ be a quasi-compact immersion of
schemes whose image $j(Z)$ is not closed in $T$. Then there exist a point
$\eta\in j(Z)$ and a point $t\in\overline{j(Z)}\setminus j(Z)$ such that
$t\in\overline{\{\eta\}}$, that is, $\eta$ specializes to $t$.

## Facts & Assumptions

**Given:** A quasi-compact immersion $j:Z\to T$ with $j(Z)$ not closed, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] A morphism $j$ is an **immersion** if it factors as a closed immersion into an open subscheme of its target; this is the hypothesis on $j$. ([[def-locally-closed-immersion]])

[F2] A morphism is **quasi-compact** when the inverse image of every quasi-compact open is quasi-compact. ([[def-quasi-compact-and-quasi-separated-morphism]])

[F3] A scheme $Z$ is **quasi-compact** when every open cover of $|Z|$ has a finite subcover; every point of a scheme has an affine open neighbourhood, so affine opens form a basis. ([[def-quasi-compact-and-quasi-separated-scheme]], [[def-scheme]])

[F4] Every affine scheme is quasi-compact. ([[cor-affine-scheme-quasi-compact]])

[F5] Any base change of a quasi-compact morphism is quasi-compact; in particular, for an open $V\subseteq T$ the morphism $j^{-1}(V)\to V$ is quasi-compact. ([[lem-base-change-quasi-compact-morphisms]])

[F6] A ring map $R\to A$ induces the map $\mathfrak q\mapsto\varphi^{-1}\mathfrak q$ on spectra; so a point of $\operatorname{Spec}A$ maps to the prime $\mathfrak q\cap R$ of $\operatorname{Spec}R$. ([[def-morphism-affine-schemes-from-ring-map]])

[F7] For $f\in R$ the distinguished open is $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$; these sets form a basis of the topology of $\operatorname{Spec}R$, and a point lies in the closure of a set exactly when every basic open neighbourhood of it meets the set. ([[def-principal-distinguished-subset-of-spectrum]])

[F8] Specialization in a spectrum is reverse inclusion: $t$ lies in the closure of $\{\eta\}$ exactly when the prime of $\eta$ is contained in the prime of $t$. ([[cor-specialisation-order-is-prime-inclusion]])

[F9] Assume AC: in a nonzero commutative ring every proper ideal is contained in a maximal ideal, hence every nonzero commutative ring has a prime ideal. ([[thm-proper-ideal-contained-in-maximal-ideal]])

## Proof

**Proof technique:** direct.

1.1 Since $j(Z)$ is not closed, choose $t\in\overline{j(Z)}\setminus j(Z)$ and an affine open $V=\operatorname{Spec}R\subseteq T$ containing $t$; then $t$ lies in the closure in $V$ of $j(Z)\cap V$, because $V$ is an open neighbourhood of $t$, and $t\notin j(Z)\cap V$. [given]

2.1 By [F5] the morphism $j^{-1}(V)\to V$ is quasi-compact, and $V$ is affine, hence quasi-compact by [F4]; so $j^{-1}(V)$ is quasi-compact by [F2]. By [F3] it is covered by finitely many affine opens $Z_1,\dots,Z_n$ with $Z_i=\operatorname{Spec}A_i$. [F2, F3, F4, F5, step 1.1]

3.1 Now $j(Z)\cap V=\bigcup_{i=1}^n j(Z_i)$, so the closure in $V$ of $j(Z)\cap V$ is the union of the finitely many closures of the $j(Z_i)$; as $t$ lies in that closure but in none of the $j(Z_i)$ (step 1.1), some index $i$ has $t\in\overline{j(Z_i)}\setminus j(Z_i)$. Fix such an $i$, write $\mathfrak p\subseteq R$ for the prime corresponding to $t$, and note $t\notin j(Z_i)$. [step 1.1, step 2.1]

4.1 For $f\in R$ with $f\notin\mathfrak p$ one has $t\in D(f)$, so by [F7] the intersection $D(f)\cap j(Z_i)$ is nonempty; that set is the image of $\operatorname{Spec}((A_i)_f)$ under the composite $\operatorname{Spec}A_i\to V$, so $(A_i)_f\ne0$, since a nonzero commutative ring has a prime ideal by [F9]. [F7, F9, step 3.1]

5.1 The rings $(A_i)_f$ for $f\notin\mathfrak p$ form a filtered system with colimit $(A_i)_{\mathfrak p}$; since $1\ne0$ in every $(A_i)_f$ by step 4.1, also $1\ne0$ in the colimit, so $(A_i)_{\mathfrak p}\ne0$. By [F9] the nonzero ring $(A_i)_{\mathfrak p}$ has a prime ideal $\mathfrak q'$, whose contraction $\mathfrak q\subseteq A_i$ satisfies $\mathfrak q\cap(R\setminus\mathfrak p)=\varnothing$, that is $\mathfrak q\cap R\subseteq\mathfrak p$. [F9, step 4.1]

6.1 Let $\eta$ be the point of $Z_i$ corresponding to $\mathfrak q$. By [F6] its image under $j$ is the prime $\mathfrak q\cap R\subseteq\mathfrak p$, and $\eta\in Z_i\subseteq Z$ so $j(\eta)\in j(Z_i)\subseteq j(Z)$. By [F8] the containment $\mathfrak q\cap R\subseteq\mathfrak p$ says exactly that $t\in\overline{\{\eta\}}$. [F6, F8, step 5.1]

7.1 Steps 1.1, 3.1 and 6.1 produce $\eta\in j(Z)$ and $t\in\overline{j(Z)}\setminus j(Z)$ with $t\in\overline{\{\eta\}}$, which is the assertion. Only quasi-compactness of $j$, the affine basis of the topology and [F9] were used, the last being the exact use of the Axiom of Choice; the immersion hypothesis [F1] is not needed for this argument. [F1, step 1.1, step 3.1, step 6.1] ∎
