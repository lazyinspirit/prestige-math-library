---
id: thm-birkhoff-grothendieck-vector-bundles-p1
kind: theorem
title: "Birkhoff-Grothendieck: vector bundles on the projective line split"
status: draft
origin: pipeline
deps:
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-picard-projective-line-integers
  - cor-top-cohomology-projective-space-o-d
  - def-axiom-of-choice
  - def-direct-sum-of-a-family-of-modules
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - def-sheaf-cohomology-derived-global-sections
  - def-twist-quasi-coherent-sheaf-projective
  - def-twisting-sheaf-proj
  - lem-global-sections-left-exact
  - lem-nonzero-map-invertible-to-locally-free-injective
  - lem-vector-bundle-p1-extension-splits
  - lem-vector-bundle-p1-has-maximal-degree-line-subbundle
  - lem-vector-bundle-p1-maximal-line-quotient-locally-free
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-twisting-sheaf-invertible-standard-graded
  - thm-vector-bundles-locally-free-sheaves-equivalence
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the cohomology and splitting
suppliers. Let $E$ be a finite locally free $\mathcal O_{\mathbb P^1_k}$-module
of rank $r\ge1$ on the projective line over a field $k$. Then $E$ is
isomorphic to a direct sum of line bundles,
$E\cong\mathcal O(a_1)\oplus\dots\oplus\mathcal O(a_r)$ with integers
$a_1\le\dots\le a_r$. The multiset $\{a_1,\dots,a_r\}$ is determined by $E$;
equivalently, the function $m\mapsto h^0(\mathbb P^1_k,E(m))$ determines it,
and the decomposition is unique up to permutation. In the language of
geometric vector bundles, every vector bundle on $\mathbb P^1_k$ is a direct
sum of line bundles of uniquely determined degrees.

## Facts & Assumptions

**Given:** a field $k$, the projective line $X=\mathbb P^1_k$, and a finite locally free $\mathcal O_X$-module $E$ of rank $r\ge1$.

[F1] A finite locally free $\mathcal O_X$-module of rank $r$ is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X^{\oplus r}$; such modules are the sheaves of sections of geometric vector bundles, and the two descriptions determine each other, so a splitting statement for finite locally free modules is a splitting statement for vector bundles ([[def-locally-free-sheaf-finite-rank]], [[thm-vector-bundles-locally-free-sheaves-equivalence]]).

[F2] Every invertible sheaf on $X$ is isomorphic to $\mathcal O_X(d)$ for a unique integer $d$, and $\mathcal O_X(d)\cong\mathcal O_X(e)$ if and only if $d=e$; equivalently $\operatorname{Pic}(X)\cong\mathbb Z$ with generator $[\mathcal O_X(1)]$ ([[cor-picard-projective-line-integers]]).

[F3] $h^0(X,\mathcal O_X(d))=\dim_kH^0(X,\mathcal O_X(d))=d+1$ for $d\ge0$ and $=0$ for $d<0$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[def-twisting-sheaf-proj]]), and $H^1(X,\mathcal O_X(d))=0$ for every $d\ge-1$ ([[cor-top-cohomology-projective-space-o-d]]). In particular $h^0(\mathcal O_X(-1))=H^1(X,\mathcal O_X(-1))=0$.

[F4] If $E$ is nonzero then the set of integers $n$ with $H^0(X,E(n))\ne0$ is nonempty and bounded below; with $b$ its negative minimum, $H^0(X,E(-b))\ne0$, $H^0(X,E(-b-1))=0$, and no line subbundle of $E$ has degree greater than $b$, while $E$ contains a line subbundle of degree $b$ ([[lem-vector-bundle-p1-has-maximal-degree-line-subbundle]]).

[F5] Let $M$ be a finite locally free $\mathcal O_X$-module of rank $r\ge2$ and let $\varphi:\mathcal O_X\to M$ be a nonzero morphism with $H^0(X,M(-1))=0$ (the case $b=0$ of the maximality condition). Then the cokernel $W=M/\mathcal O_X$ is finite locally free of rank $r-1$ ([[lem-vector-bundle-p1-maximal-line-quotient-locally-free]], [[def-locally-free-sheaf-finite-rank]]).

[F6] Every nonzero morphism from an invertible sheaf to a finite locally free module is injective; a global section $s$ of a module $\mathcal F$ is the same thing as the morphism $s^\sharp:\mathcal O_X\to\mathcal F$, $a\mapsto a\cdot s|_U$ ([[lem-nonzero-map-invertible-to-locally-free-injective]], [[def-invertible-sheaf]]).

[F7] Let $0\to\mathcal O_X\to M\to W\to0$ be a short exact sequence of finite locally free sheaves with $W\cong\bigoplus_i\mathcal O_X(n_i)$ and $n_i\le0$ for every $i$. Then $M\cong\mathcal O_X\oplus W$ ([[lem-vector-bundle-p1-extension-splits]]).

[F8] Twisting is $\mathcal F(m)=\mathcal F\otimes_{\mathcal O_X}\mathcal O_X(m)$, with $\mathcal F(m)\otimes\mathcal O_X(n)\cong\mathcal F(m+n)$ and $(\mathcal F(m))(n)\cong\mathcal F(m+n)$; twisting is functorial, carries nonzero morphisms to nonzero morphisms, and preserves exactness because $\mathcal O_X(m)$ is invertible ([[def-twist-quasi-coherent-sheaf-projective]], [[thm-twisting-sheaf-invertible-standard-graded]], [[def-twisting-sheaf-proj]]).

[F9] $H^0(X,\mathcal F)=\Gamma(X,\mathcal F)$ and the functor $H^0$ is left exact; for a short exact sequence of sheaves $0\to\mathcal F\to\mathcal G\to\mathcal H\to0$ there is a long exact sequence of cohomology $\cdots\to H^0(\mathcal F)\to H^0(\mathcal G)\to H^0(\mathcal H)\to H^1(\mathcal F)\to\cdots$ ([[def-sheaf-cohomology-derived-global-sections]], [[thm-long-exact-sequence-sheaf-cohomology]], [[lem-global-sections-left-exact]]).

[F10] A finite direct sum of modules is both a coproduct and a product: a section of $\bigoplus_i\mathcal F_i$ is a finite tuple of sections of the $\mathcal F_i$, so $H^0(X,\bigoplus_i\mathcal F_i)\cong\bigoplus_iH^0(X,\mathcal F_i)$ and dimensions add; and the direct sum of finite locally free sheaves is finite locally free of the summed rank ([[def-direct-sum-of-a-family-of-modules]], [[def-locally-free-sheaf-finite-rank]]).

[F11] The Axiom of Choice is assumed and is used only through the suppliers named in the facts above; the induction below makes no further infinite selection ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** induction on the rank; split off a line subbundle of maximal degree and apply the extension-splitting lemma to the quotient, then recover the multiset of degrees from the function $m\mapsto h^0(E(m))$.

1.1 Base case. If $r=1$ then $E$ is invertible, so by [F2] there is a unique integer $a_1$ with $E\cong\mathcal O_X(a_1)$; this is a direct sum of one line bundle, and the multiset $\{a_1\}$ is determined by $E$. [F2]

1.2 The maximal line subbundle. Let $r\ge2$ and assume the theorem known for all finite locally free modules of rank $r-1$. By [F4], applied to the nonzero module $E$, there is an integer $b$ with $H^0(X,E(-b))\ne0$ and $H^0(X,E(-b-1))=0$, no line subbundle of $E$ has degree greater than $b$, and $E$ contains a line subbundle of degree $b$. [F4]

2.1 The normalized extension. Put $M:=E(-b)$, so that $H^0(X,M)\ne0$ and $H^0(X,M(-1))=0$ by [F8] and step 1.2. Choose a nonzero global section $s$ of $M$; by [F6] the corresponding morphism $s^\sharp:\mathcal O_X\to M$ is injective, and by [F5] (with $b=0$, its maximality hypothesis being exactly $H^0(X,M(-1))=0$) its cokernel $W:=M/\mathcal O_X$ is a finite locally free $\mathcal O_X$-module of rank $r-1$. Thus $0\to\mathcal O_X\to M\to W\to0$ is a short exact sequence. [F5, F6, F8, step 1.2]

3.1 The vanishing on the quotient. Twist the sequence of step 2.1 by $\mathcal O_X(-1)$: by [F8] this gives the short exact sequence $0\to\mathcal O_X(-1)\to M(-1)\to W(-1)\to0$, whose long exact cohomology sequence by [F9] begins $0\to H^0(\mathcal O_X(-1))\to H^0(M(-1))\to H^0(W(-1))\to H^1(\mathcal O_X(-1))$. The two outer terms vanish by [F3] and the middle term vanishes by [F8] and step 1.2; exactness therefore forces $H^0(X,W(-1))=0$. [F3, F8, F9, step 1.2, step 2.1]

4.1 The quotient splits into twists of nonpositive degree. The module $W$ is finite locally free of rank $r-1$ by step 2.1, so the induction hypothesis of step 1.2 applied to $W$ gives $W\cong\bigoplus_{i=1}^{r-1}\mathcal O_X(n_i)$ for integers $n_i$. By [F10] and [F3], $h^0(X,W(-1))=\sum_{i=1}^{r-1}h^0(X,\mathcal O_X(n_i-1))$, and each summand equals $n_i$ when $n_i\ge1$ and $0$ when $n_i\le0$. Since $h^0(X,W(-1))=0$ by step 3.1 and all summands are nonnegative, every summand vanishes, so $n_i\le0$ for every $i$. [F3, F10, step 1.2, step 2.1, step 3.1]

5.1 Splitting off a line subbundle. The extension $0\to\mathcal O_X\to M\to W\to0$ of step 2.1 has $W\cong\bigoplus_i\mathcal O_X(n_i)$ with $n_i\le0$ by step 4.1, so [F7] gives $M\cong\mathcal O_X\oplus W$. Twisting by $\mathcal O_X(b)$, which commutes with finite direct sums and satisfies $\mathcal O_X(b)\otimes\mathcal O_X(n)\cong\mathcal O_X(n+b)$ by [F8], yields $E\cong M(b)\cong\mathcal O_X(b)\oplus\bigoplus_{i=1}^{r-1}\mathcal O_X(n_i+b)$, a direct sum of $r$ line bundles; this is the induction step, and with the base case of step 1.1 it proves that every finite locally free $\mathcal O_X$-module of rank $r\ge1$ is a direct sum of line bundles. [F7, F8, F10, step 1.1, step 2.1, step 4.1]

6.1 Uniqueness of the multiset. Suppose $E\cong\bigoplus_{i=1}^r\mathcal O_X(a_i)$. Twisting by $\mathcal O_X(m)$ and using [F8], [F10] and [F3] gives $h^0(X,E(m))=\sum_{i=1}^r h^0(X,\mathcal O_X(a_i+m))=\sum_{i=1}^r\max(a_i+m+1,0)$. Consequently the difference of consecutive values is $h^0(X,E(m))-h^0(X,E(m-1))=\#\{\,i:a_i+m+1>0\,\}=\#\{\,i:a_i\ge-m\,\}$, so for every integer $t$ the function determines the counting number $\#\{i:a_i\ge t\}$ by evaluation at $m=-t$. The finitely many counting numbers $\#\{i:a_i\ge t\}$ determine the multiset $\{a_i\}$, so the multiset is determined by $E$, equivalently by the function $m\mapsto h^0(X,E(m))$; in particular the decomposition is unique up to permutation of the summands. [F3, F8, F10, step 5.1]

7.1 Conclusion and choice accounting. Steps 1.1 and 5.1 prove the existence of the direct-sum decomposition for every rank $r\ge1$, and step 6.1 proves that the multiset of degrees is determined by $E$, hence unique up to permutation; the translation to geometric vector bundles is [F1]. The Axiom of Choice is inherited only through the suppliers of the cited facts, as recorded in [F11]; the proof selects a section of a nonzero finite-dimensional space and a finite tuple of integers, and repeatedly reduces the rank by one, so no further infinite selection occurs. [F1, F11, step 1.1, step 5.1, step 6.1] ∎
