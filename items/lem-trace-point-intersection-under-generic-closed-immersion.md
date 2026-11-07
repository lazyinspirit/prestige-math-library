---
id: lem-trace-point-intersection-under-generic-closed-immersion
kind: lemma
title: Trace-point intersection from a generic product closed immersion
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-k-trace-of-an-abelian-variety
  - lem-regular-field-extension-tensor-products-are-domains
  - lem-subgroup-of-finitely-generated-abelian-group-is-finitely-generated
proof_strategy: direct
axiom_use: AC and DC are explicit for the field, trace and subgroup interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Chow's K/k-image and K/k-trace, and the Lang–Néron theorem
      url: https://math.stanford.edu/~conrad/papers/Kktrace.pdf
      locator: Lemma 7.3, printed pp.23–24; the generic product closed immersion is retained as an explicit hypothesis and the point-intersection argument is supplied below.
verification: {}
---

## Statement

Assume AC and DC. Let $K/k$ be a finitely generated regular field extension, let $k'/k$ be any field extension, and put $K'=\operatorname{Frac}(K\otimes_k k')$. Let $A/K$ be an abelian variety and let $(T,\tau)$ be a supplied $K/k$-trace pair. For some integer $m\ge1$, put $F_m=\operatorname{Frac}(K^{\otimes_k m})$ and write $p_i:K\to F_m$ for the $i$th factor map. Assume that the homomorphism
$$\Phi=(p_1^*\tau,\ldots,p_m^*\tau):T_{F_m}\longrightarrow\prod_{i=1}^m p_i^*A$$
is a closed immersion. Then, inside $A(K')$,
$$A(K)\cap\tau\bigl(T(k')\bigr)=\tau\bigl(T(k)\bigr).$$
Here the trace-point notation includes the indicated base changes. If $A(K')/\tau(T(k'))$ is finitely generated, then $A(K)/\tau(T(k))$ is finitely generated. In particular, the premise follows from the Lang–Néron conclusion over $K'/k'$ if $(T_{k'},\tau_{K'})$ is a $K'/k'$-trace pair.

The generic product closed immersion, trace base-change assertion and finite generation upstairs are explicit hypotheses here. This lemma does not prove any of them or the Lang–Néron theorem without those inputs.

## Facts & Assumptions

**Given:** The regular extension, constant extension, abelian variety, trace pair, integer and product closed immersion in the Statement. The final implication additionally assumes the displayed finite generation; the stated application to the upstairs trace uses the separate trace base-change hypothesis.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] For a finitely generated regular extension $K/k$ and every field $E/k$, the tensor product $E\otimes_kK$ is a domain. [[lem-regular-field-extension-tensor-products-are-domains]]

[F2] A trace pair is an abelian variety over the constant field with the stated homomorphism and universal property. [[def-k-trace-of-an-abelian-variety]]

[F3] Every subgroup of a finitely generated abelian group is finitely generated. [[lem-subgroup-of-finitely-generated-abelian-group-is-finitely-generated]]

## Proof

**Proof technique:** use the supplied closed immersion to descend one common trace point to a tensor-product function field, then intersect the two constant fields.

1.1 By [F1], $E\otimes_kK$ is a domain for every field $E/k$. Iterating this observation proves that $E\otimes_kK^{\otimes_k m}$ is a domain: after each factor, embed the current domain in its fraction field and tensor with $K$; tensoring over the field $k$ preserves the injection, and [F1] makes the target a domain. Taking $E=k$ constructs $F_m$; taking $E=k'$ and localizing proves that $F_m\otimes_k k'$ is a domain. Write $F'_m$ for its fraction field. Each $p_i:K\to F_m$ and $k'\to F'_m$ gives an embedding of $K'=\operatorname{Frac}(K\otimes_k k')$ into $F'_m$ because the relevant tensor-product injection is preserved by localization. [F1, given, construct, induction, algebra]

2.1 Inside $F'_m$ one has $F_m\cap k'=k$. Indeed, if $a\in F_m$ and $b\in k'$ have equal images and $a\notin k$, the $k$-vectors $1,a$ are independent. Choose a $k$-linear functional on their span sending $1$ to zero and $a$ to one, and extend it to $F_m$ using [A1]. Applying it to $a\otimes1-1\otimes b$ shows this tensor is nonzero, contradicting the injection of $F_m\otimes_k k'$ into its fraction field. Consequently, for any $k$-scheme $Z$, a point of $Z(F_m)$ and a point of $Z(k')$ with the same image in $Z(F'_m)$ come from one point of $Z(k)$: choose a common affine $k$-open around their common image in $Z$, and apply the field intersection to every coordinate. [A1, step 1.1, given, choose, construct, algebra]

3.1 Let $x\in A(K)$ and $t\in T(k')$ have the same image after applying $\tau$ in $A(K')$. Regard $t$ as an $F'_m$-point of $T$. For every $i$, the $i$th component of $\Phi(t)$ is the base change of $x$ along $p_i$, so the full image is an $F_m$-point $z$ of $\prod_i p_i^*A$. Since $\Phi$ is a closed immersion, the ideal defining its image vanishes on $z$ after the faithfully injective extension $F_m\subseteq F'_m$, hence already vanishes on $z$. Thus $z$ factors uniquely through an $F_m$-point $t_0$ of $T_{F_m}$. The closed immersion is a monomorphism, so $t_0$ and $t$ have the same image in $T(F'_m)$. By step 2.1, $t$ comes from $T(k)$, and $x=\tau(t)$ by injectivity of base extension on points. The reverse containment is immediate. [F2, step 1.1, step 2.1, given, construct, algebra]

4.1 The intersection equality in step 3.1 makes the natural map $A(K)/\tau(T(k))\to A(K')/\tau(T(k'))$ injective. If the target is finitely generated, [F3] makes its subgroup $A(K)/\tau(T(k))$ finitely generated. If the base-changed pair is a $K'/k'$-trace pair, the target is the Lang–Néron quotient over $K'/k'$, giving the stated application. The cases $m=1$, $k'=k$, and the trivial trace are included. No proof of the supplied closed immersion or trace base change is asserted. [F2, F3, step 3.1, algebra] ∎
