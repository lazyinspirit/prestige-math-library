---
id: lem-hh-tensor-injections-quotients-and-kernels-over-a-field
kind: lemma
title: "Tensoring injections and the kernel of a tensor product of quotient maps over a field"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps: [def-hh-scalar-and-tensor-conventions, def-axiom-of-choice, cor-a-linear-subspace-has-a-complement, def-linear-subspace, def-internal-direct-sum, def-quotient-module, def-kernel-and-image-of-a-linear-map, prop-functoriality-of-module-tensor-products, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-unit-isomorphisms-for-module-tensor-products, thm-second-isomorphism-theorem-modules]
justified_by: []
axiom_use: 'AC is consumed exactly through [[cor-a-linear-subspace-has-a-complement]], for the complement of the image of $f$ and for complements of $U$ in $V$ and of $Z$ in $W$ (written $V=U\oplus V_1$ and $W=Z\oplus W_1$); no other choice is made.'
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "Theorem 4.15, printed pp. 18–19: unique tensor coefficients with a free factor; Remark 4.17, printed p. 19, and Theorem 5.17 and Corollary 5.18, printed p. 34: the distinction between injectivity on elementary tensors and on all tensors"
    - title: "The CRing Project, open-source commutative algebra text (2016 PDF; Chapter 13)"
      url: "https://math.colorado.edu/topology/cringproject.pdf"
      locator: "§13.4.1–13.4.3, printed pp. 143–145: right exactness of $\\otimes$ and the sharpness of its failure to preserve injections"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let $f:V\to V'$ be an injective linear map and let $W$ be a $k$-vector space. Then $f\otimes\mathrm{id}_W:V\otimes W\to V'\otimes W$ is injective. Moreover, if $U\subseteq V$ and $Z\subseteq W$ are subspaces and $p:V\to V/U$, $q:W\to W/Z$ are the quotient maps, then, viewing $U\otimes W$ and $V\otimes Z$ as subspaces of $V\otimes W$ through the injections of the first part and the inclusions $U\subseteq V$, $Z\subseteq W$,
$$\ker(p\otimes q)=U\otimes W+V\otimes Z .$$

## Facts & Assumptions

**Given:** A field $k$, an injective linear map $f:V\to V'$, a $k$-vector space $W$, subspaces $U\subseteq V$, $Z\subseteq W$, and the quotient maps $p:V\to V/U$, $q:W\to W/Z$.

[A1] The Axiom of Choice holds, so by [[cor-a-linear-subspace-has-a-complement]] every linear subspace of a vector space has a complement: for the injections $f$, and the inclusions $U\subseteq V$, $Z\subseteq W$, there are subspaces with $V'=f(V)\oplus C$, $V=U\oplus V_1$ and $W=Z\oplus W_1$ ([[def-internal-direct-sum]]).

[F1] The conventions: $V\otimes W$ is the tensor product with its universal property, every element is a finite sum of elementary tensors, the defining relations give $(v+v')\otimes w=v\otimes w+v'\otimes w$, $v\otimes(w+w')=v\otimes w+v\otimes w'$ and $0\otimes w=0=v\otimes0$, and $kv\otimes w=v\otimes kw$ ([[def-hh-scalar-and-tensor-conventions]]).

[F2] Functoriality: $(f\otimes g)(v\otimes w)=f(v)\otimes g(w)$ defines a linear map, $\mathrm{id}\otimes\mathrm{id}=\mathrm{id}$, and $(f'\circ f)\otimes(g'\circ g)=(f'\otimes g')\circ(f\otimes g)$ ([[prop-functoriality-of-module-tensor-products]]).

[F3] Quotient modules consist of cosets, the quotient map is linear with kernel the submodule quotiented by, and kernels and images of linear maps are subspaces ([[def-quotient-module]], [[def-kernel-and-image-of-a-linear-map]], [[def-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 Injectivity of $f\otimes\mathrm{id}_W$: by [A1] write $V'=f(V)\oplus C$ and define $g:V'\to V$ by $g(f(v)+c):=v$; this is well defined and linear because every element of $V'$ has a unique decomposition, and $g\circ f=\mathrm{id}_V$. By [F2], $(g\otimes\mathrm{id}_W)\circ(f\otimes\mathrm{id}_W)=(g\circ f)\otimes\mathrm{id}_W=\mathrm{id}_V\otimes\mathrm{id}_W=\mathrm{id}_{V\otimes W}$, so $f\otimes\mathrm{id}_W$ has a left inverse and is injective. [given, A1, F2, algebra]

1.2 Containment: for $u\in U$ and $w\in W$ one has $(p\otimes q)(u\otimes w)=p(u)\otimes q(w)=0\otimes q(w)=0$ by [F1], because $p$ kills $U$; likewise $p\otimes q$ kills every $v\otimes z\in V\otimes Z$ because $q$ kills $Z$. Hence $\operatorname{im}(U\otimes W)$ and $\operatorname{im}(V\otimes Z)$ lie in the kernel $\ker(p\otimes q)$, which is a subspace by [F3], so their sum $U\otimes W+V\otimes Z$ lies in the kernel as well. [given, F1, F3, algebra]

1.3 Complements and an isomorphism: by [A1] write $V=U\oplus V_1$ and $W=Z\oplus W_1$. The restrictions $p_1:=p|_{V_1}$ and $q_1:=q|_{W_1}$ are isomorphisms onto $V/U$ and $W/Z$: a coset $v+U$ with $v=u+v_1$ equals $v_1+U$, so $p_1$ is surjective, and if $p(v_1)=0$ then $v_1\in U\cap V_1=0$ by the direct-sum condition, so $p_1$ is injective (and likewise for $q_1$); by [F2] the map $p_1\otimes q_1:V_1\otimes W_1\to(V/U)\otimes(W/Z)$ is then an isomorphism with inverse $s\otimes r$, where $s=p_1^{-1}$ and $r=q_1^{-1}$. Every element of $V$ is uniquely $u+x$ with $u\in U$, $x\in V_1$, so the component maps $v\mapsto u$ and $v\mapsto x$ are well defined and linear, and likewise for $W=Z\oplus W_1$; consequently each of the three inclusion-induced maps $\iota_U\otimes\mathrm{id}_W:U\otimes W\to V\otimes W$, $\mathrm{id}_V\otimes\iota_Z:V\otimes Z\to V\otimes W$ and $\iota_{V_1}\otimes\iota_{W_1}:V_1\otimes W_1\to V\otimes W$ has a left inverse induced by the corresponding component projection (for the first, $(\pi_U\otimes\mathrm{id}_W)\circ(\iota_U\otimes\mathrm{id}_W)=(\pi_U\circ\iota_U)\otimes\mathrm{id}_W=\mathrm{id}_{U\otimes W}$ by [F2], and similarly for the others), hence is injective and exhibits its domain inside $V\otimes W$ through the injections of the statement; under these identifications the composite $V_1\otimes W_1\to V\otimes W\to(V/U)\otimes(W/Z)$ is exactly $p_1\otimes q_1$, since both send $x\otimes y$ to $p_1(x)\otimes q_1(y)$. [given, A1, F2, F3, algebra]

2.1 Kernel: let $t\in\ker(p\otimes q)$ and write $t=\sum_i v_i\otimes w_i$ as a finite sum of elementary tensors by [F1]. Decompose $v_i=u_i+x_i$ with $u_i\in U$, $x_i\in V_1$ and $w_i=z_i+y_i$ with $z_i\in Z$, $y_i\in W_1$ by the direct sums of step 1.3 and expand bilinearly by [F1]: $t=\sum_iu_i\otimes w_i+\sum_ix_i\otimes z_i+\sum_ix_i\otimes y_i$, where the first summand lies in $\operatorname{im}(U\otimes W)$, the second in $\operatorname{im}(V_1\otimes Z)\subseteq\operatorname{im}(V\otimes Z)$, and the third is the image of $\sum_ix_i\otimes y_i\in V_1\otimes W_1$. Applying $p\otimes q$ kills the first two summands by step 1.2, so $0=(p\otimes q)(t)=(p_1\otimes q_1)\bigl(\sum_ix_i\otimes y_i\bigr)$ by the identification of step 1.3; injectivity of $p_1\otimes q_1$ gives $\sum_ix_i\otimes y_i=0$ in $V_1\otimes W_1$, hence the third summand is $0$ in $V\otimes W$, and $t\in U\otimes W+V\otimes Z$. [step 1.1, step 1.2, step 1.3, F1, algebra]

3.1 Steps 1.2 and 2.1 give the two inclusions, so $\ker(p\otimes q)=U\otimes W+V\otimes Z$ for the subspaces exhibited through the injections of step 1.1, and step 1.1 itself is the first assertion of the statement. [step 1.1, step 1.2, step 2.1] ∎
