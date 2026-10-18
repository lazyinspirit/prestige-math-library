---
id: lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form
kind: lemma
title: "Finite acyclic quiver representations are finitary hereditary with the Euler form"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-acyclic-quiver-stability-data
  - def-hall-finitary-abelian-category
  - def-equivalence-of-n-fold-extensions
  - thm-short-five-lemma-in-an-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, §§1.1, 1.3 and 3.3"
      url: "https://arxiv.org/pdf/math/0611617"
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §§2.1 and 3.2–3.4"
      url: "https://arxiv.org/pdf/1611.03696"
verification:
  precheck: pass
---

## Statement

Let $Q$ be a finite acyclic quiver and $K$ any field. The category
$\mathcal A_Q(K)$ of finite-dimensional representations is abelian. For all
$X,Y\in\mathcal A_Q(K)$, the spaces $\operatorname{Hom}(X,Y)$ and Yoneda
$\operatorname{Ext}^1(X,Y)$ are finite-dimensional $K$-vector spaces, and
$$\dim_K\operatorname{Hom}(X,Y)-\dim_K\operatorname{YExt}^1(X,Y) =\chi_Q(\mathbf d(X),\mathbf d(Y)).$$
The explicit projective resolution below shows that the projective-resolution
groups $\operatorname{Ext}^r_{\mathcal A_Q(K)}(X,Y)$ vanish for $r\ge2$; these
groups are the cohomology of applying $\operatorname{Hom}_{\mathcal A_Q(K)}(-,Y)$
to a projective resolution. If
$K=\mathbb F_q$, the displayed vector spaces have finite underlying sets and
$\mathcal A_Q(K)$ has a small skeleton (a small full subcategory with one
representative of each isomorphism class), so it is a small finitary abelian
category. Yoneda $\operatorname{Ext}^1$ is classified directly below; it is
not identified with derived $\operatorname{Ext}^1$ by an unstated theorem.

## Facts & Assumptions

**Given:** A finite acyclic quiver $Q$, a field $K$, and
$X,Y\in\mathcal A_Q(K)$.

[F1] For every field $K$, $\mathcal A_Q(K)$ is the category of vertexwise
vector spaces and arrow maps, and $\chi_Q$ is the displayed Euler form
([[def-finite-acyclic-quiver-stability-data]]).

[F2] A small finitary abelian category has finite Hom sets and finite Yoneda
extension-class sets, with endpoint-fixed short-exact-sequence equivalence
([[def-hall-finitary-abelian-category]]).

[F3] A morphism between short exact sequences that is the identity on both
endpoints is an isomorphism on the middle object
([[thm-short-five-lemma-in-an-abelian-category]]).

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For a morphism $f:X\to Y$, its vertexwise kernels form a subrepresentation: if $x\in\ker f_i$, then $f_jX_a(x)=Y_af_i(x)=0$ for every arrow $a:i\to j$. The vertexwise cokernels form a quotient representation because $Y_a(\operatorname{im}f_i)\subseteq\operatorname{im}f_j$. The kernel and cokernel universal properties hold vertex by vertex. The canonical coimage-to-image map is an isomorphism at every vertex, hence an isomorphism of representations. With vertexwise finite direct sums and a zero object, these facts make $\mathcal A_Q(K)$ abelian. [F1, construct, algebra]

1.2 For $i\in Q_0$, let $P_i(v)$ have basis the directed paths from $i$ to $v$, with arrow maps given by path concatenation. Acyclicity and finiteness of $Q$ make each path set finite. A morphism $P_i\to N$ is uniquely determined by the image of the length-zero path at $i$, so $\operatorname{Hom}(P_i,N)\cong N_i$; evaluation at $i$ preserves epimorphisms, and therefore $P_i$ is projective. [F1, construct, algebra]

1.3 Put $$C^0(X,Y)=\bigoplus_i\operatorname{Hom}_K(X_i,Y_i),\qquad C^1(X,Y)=\bigoplus_{a:i\to j}\operatorname{Hom}_K(X_i,Y_j),$$ and define $\partial:C^0\to C^1$ by $(\partial h)_a=Y_ah_i-h_jX_a$. Its kernel is exactly $\operatorname{Hom}_{\mathcal A_Q(K)}(X,Y)$ by the commuting-square definition of a representation morphism. [F1, construct, algebra]

2.1 For a representation $X$, define $\epsilon:\bigoplus_iP_i\otimes_KX_i\to X$ by $p\otimes x\mapsto X_p(x)$, where $X_p$ is the composite arrow map along the path $p$. Define $$d:\bigoplus_{a:i\to j}P_j\otimes_KX_i\longrightarrow\bigoplus_iP_i\otimes_KX_i$$ at a path $p:j\to v$ by $$d(p\otimes x)=(p\otimes X_a(x))_j-((p\circ a)\otimes x)_i.$$ Both terms are finite direct sums of the projectives from step 1.2. Then $\epsilon d=0$ because $X_{p\circ a}=X_pX_a$. [F1, construct, algebra]

2.2 Now assume $K=\mathbb F_q$. For each dimension vector $\mathbf d$, there are finitely many arrow matrix tuples on the fixed spaces $K^{d_i}$, and the finite group $G_{\mathbf d}(K)$ has finitely many orbits on this set. Fix an enumeration of the finite set $K$; the lexicographically least tuple in each orbit gives a representative without making a choice from an arbitrary family. The union over the set $\mathbb N^{Q_0}$ is a set, so the full subcategory on these representatives is small. It is a skeleton: every finite-dimensional representation becomes one of the matrix tuples after choosing bases at its finitely many vertices. The full skeleton is abelian because each vertexwise kernel and cokernel from step 1.1 is isomorphic to its selected representative, and transporting its kernel or cokernel map across that isomorphism preserves the universal property. [F1, step 1.1, choose]

3.1 At vertex $v$, $\epsilon$ is onto because $x\in X_v$ is the image of $\operatorname{id}_v\otimes x$. Modulo $\operatorname{im}d$, the relation in step 2.1 replaces $(p\circ a)\otimes x$ by $p\otimes X_a(x)$. Every positive-length path has a unique first arrow, so repeated replacement sends each path tensor to $\operatorname{id}_v\otimes X_p(x)$. Consequently the quotient of the middle term by $\operatorname{im}d$ is isomorphic to $X_v$ through $\epsilon$, and $\ker\epsilon=\operatorname{im}d$. [step 2.1, algebra]

4.1 The map $d$ is injective. In a nonzero element of its domain, choose the largest length $\ell$ of a suffix path $p$ with nonzero coefficient. The second term of $d(p\otimes x)$ has length $\ell+1$. Each such path has a unique first arrow and suffix, so its coefficient cannot cancel with the second term of a different source basis summand. A first term of $d$ has length at most $\ell$, since no source suffix has length $\ell+1$. Thus the length-$(\ell+1)$ part of $d$ is nonzero, proving injectivity. The displayed sequence is a projective resolution of length one; applying $\operatorname{Hom}(-,Y)$ therefore gives $\operatorname{Ext}^r_{\mathcal A_Q(K)}(X,Y)=0$ for $r\ge2$. [step 1.2, step 2.1, step 3.1, algebra]

5.1 A short exact sequence $0\to Y\to E\to X\to0$ splits as a sequence of vector spaces at each of the finitely many vertices. In the resulting coordinates every arrow of $E$ has block matrix $$E_a=\begin{pmatrix}Y_a&\xi_a\\0&X_a\end{pmatrix},\qquad \xi_a\in\operatorname{Hom}_K(X_i,Y_j).$$ Every tuple $\xi\in C^1(X,Y)$ defines such an extension. Changing the vertexwise splittings by $h\in C^0(X,Y)$ changes $\xi$ by $\partial h$. Conversely, an isomorphism of extensions that is the identity on endpoints has block matrix $\begin{pmatrix}1&h_i\\0&1\end{pmatrix}$ at each vertex and hence changes $\xi$ by exactly $\partial h$. By [F3], the generated endpoint-fixed Yoneda relation consists of these isomorphisms. The Baer sum of the extensions represented by $\xi$ and $\eta$ is represented by $\xi+\eta$: the pullback of their direct sum along $X\to X\oplus X$ followed by pushout along $Y\oplus Y\to Y$ adds the off-diagonal arrow blocks. Pushout along $\lambda\operatorname{id}_Y$ sends $\xi$ to $\lambda\xi$. Therefore the Yoneda vector-space structure is the quotient structure $$\operatorname{YExt}^1(X,Y)\cong C^1(X,Y)/\operatorname{im}\partial,$$ a finite-dimensional $K$-vector space; it is not being identified here with the projective-resolution group of step 4.1. [F1, F3, step 1.3, construct, algebra]

6.1 Both cochain spaces in step 1.3 are finite-dimensional. Rank-nullity for $\partial$ gives $$\dim\ker\partial-\dim\operatorname{coker}\partial =\dim C^0-\dim C^1 =\sum_i d_i(X)d_i(Y)-\sum_{a:i\to j}d_i(X)d_j(Y) =\chi_Q(\mathbf d(X),\mathbf d(Y)).$$ The kernel and cokernel identifications already proved give the Hom–Yoneda-Ext$^1$ formula and finite-dimensionality over any $K$. When $K=\mathbb F_q$, the underlying sets are finite; together with the abelian and small-model arguments of steps 1.1 and 2.2, the category satisfies the small finitary abelian hypotheses of [F2]. [F1, F2, step 1.1, step 2.2, step 1.3, step 5.1, algebra] ∎
