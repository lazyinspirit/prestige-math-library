---
id: lem-green-cross-square-counting-identity
kind: lemma
title: "The Green cross–square counting identity"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-field-hereditary-hall-category
  - lem-yext-exact-sequences-in-both-variables
  - def-abelian-category
  - def-pullback-and-pushout-of-an-extension
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.5, PDF pp. 12–16: Green’s proof reduction to squares and crosses, the extension fiber and its cardinality. The local proof below supplies the diagram chases left to the reader there."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, Inventiones Mathematicae 101 (1990), 583–591"
      url: "https://noah.nrw/ubbihs/download/pdf/5112433"
      locator: "§§2–3: the full Hall-number identity underlying Green compatibility."
verification:
  precheck: pending
---

## Statement

Let $\mathcal A$ be a finite-field hereditary Hall category. Write
$a_X=|\operatorname{Aut}(X)|$, and let $P^R_{M,N}$ count exact sequences
$0\to N\to R\to M\to0$. For fixed objects $M,N,K,L$, the following
cross–square identity holds:
$$ \sum_{[J]}\frac{P^J_{M,N}P^J_{K,L}}{a_J} =\sum_{[K_1],[K_2],[L_1],[L_2]} \frac{|\operatorname{YExt}^1(K_2,L_1)|} {|\operatorname{Hom}(K_2,L_1)|} \frac{P^K_{K_2,K_1}P^L_{L_2,L_1}P^M_{K_2,L_2}P^N_{K_1,L_1}} {a_{K_1}a_{K_2}a_{L_1}a_{L_2}}. $$
Both sums are finite. The left side counts pairs of exact sequences with a
common middle object $J$; the right side counts the compatible four-edge
square data, weighted by the displayed Yoneda Ext/Hom ratio.

The diagrams below display the data being counted. A **cross** is a pair of
short exact sequences with the same middle object; it is not an assertion of
vertical maps between the endpoint objects.

```tikzcd
0 \arrow[r] & N \arrow[r, tail, "n"] & J \arrow[r, two heads, "b"] & M \arrow[r] & 0 \\
0 \arrow[r] & L \arrow[r, tail, "\ell"] & J \arrow[r, two heads, "b'"] & K \arrow[r] & 0
```

A **square datum** is the isomorphism class of these four exact edges:
$$ 0\to L_1\to N\to K_1\to0, \quad 0\to L_1\to L\to L_2\to0, \quad 0\to K_1\to K\to K_2\to0, \quad 0\to L_2\to M\to K_2\to0. $$

```tikzcd
0 \arrow[r] & L_1 \arrow[r, tail] \arrow[d, equal] & N \arrow[r, two heads] & K_1 \arrow[r] & 0 \\
0 \arrow[r] & L_1 \arrow[r, tail] & L \arrow[r, two heads] & L_2 \arrow[r] & 0
\\[1.2em]
0 \arrow[r] & K_1 \arrow[r, tail] & K \arrow[r, two heads] \arrow[d, equal] & K_2 \arrow[r] & 0 \\
0 \arrow[r] & L_2 \arrow[r, tail] & M \arrow[r, two heads] & K_2 \arrow[r] & 0
```

The equal labels indicate shared endpoint isomorphism classes only; no
additional morphisms between the two rows are part of the square datum.

## Facts & Assumptions

**Given:** A finite-field hereditary Hall category and four fixed objects
$M,N,K,L$.

[F1] Hom and Yoneda Ext groups are finite-dimensional $\mathbb F_q$-vector
spaces, and the short-exact-sequence low-degree Yoneda Ext sequences continue
through an $\operatorname{Ext}^2$ term that vanishes
([[def-finite-field-hereditary-hall-category]],
[[lem-yext-exact-sequences-in-both-variables]]).

[F2] The short-exact-sequence and pullback/pushout constructions in an
abelian category provide kernels, images, quotients, pullbacks of epimorphisms
and pushouts of monomorphisms
([[def-abelian-category]], [[def-pullback-and-pushout-of-an-extension]]).

## Proof



**Proof technique:** direct.

1.1 For each cross, let $L_1=N\cap L$, let $L_2$ be the image of $L$ in $J/N=M$, let $K_1$ be the image of $N$ in $J/L=K$, and put $K_2=J/(N+L)$. The kernel–image–quotient identities give the four exact sequences in the square datum. Thus an isomorphism of crosses induces an isomorphism of square data and defines a map from cross isomorphism classes to square isomorphism classes. [F2, given, construct]

1.2 Fix a square datum $S$. Its four short exact sequences determine $X=K\times_{K_2}M$ and $Y=L\amalg_{L_1}N$. Pullback and pushout exactness give $0\to W\to X\to K_2\to0$, $0\to L_1\to Y\xrightarrow{v}W\to0$, and $W=K_1\oplus L_2$, where $W\to X$ is the pair of kernel inclusions and $v$ is induced by the quotient maps $N\to K_1$ and $L\to L_2$. The order of the two summands is fixed as $K_1,L_2$. [F2, construct]

2.1 For a fixed cross, an automorphism $\phi$ of $J$ stabilizes its two endpoint-labelled sequences exactly when it is the identity on both subobjects $N,L$ and on both quotients $J/N,J/L$. Then $\phi-1$ vanishes on $N+L$ and has image in $N\cap L=L_1$, so it factors uniquely as $J\twoheadrightarrow K_2\xrightarrow{f}L_1\hookrightarrow J$ for $f\in\operatorname{Hom}(K_2,L_1)$. Conversely every such $f$ gives a stabilizing automorphism $1+i f\pi$: since $\pi i=0$, its inverse is $1-i f\pi$. Therefore the stabilizer has cardinality $|\operatorname{Hom}(K_2,L_1)|$. [step 1.1, F2, algebra]

2.2 A cross over $S$ is equivalent to an extension $0\to Y\to J\to K_2\to0$ together with a map of this extension to $0\to W\to X\to K_2\to0$ that is $v$ on kernels and the identity on $K_2$. Given this diagram, take the two canonical subobjects $N,L\to Y\to J$ from the pushout defining $Y$. Their intersection is $L_1$ and their sum is $Y$. The composite $J\to X\to M$ has kernel $N$: on $Y$ its kernel is $v^{-1}(K_1\oplus0)=N$, and on $J/Y\cong K_2$ it induces the quotient $M\twoheadrightarrow K_2$, so there are no additional kernel elements. It is epic because its image contains $L_2$ and surjects onto $M/L_2\cong K_2$. The same argument with $J\to X\to K$ shows kernel $L$ and epimorphic quotient. Conversely, from a cross, the quotient maps $J\to J/L=K$ and $J\to J/N=M$ induce the unique map $J\to X$ with the stated restrictions. This identifies the fiber over $S$. [step 1.2, F2, construct]

3.1 Let $\eta\in\operatorname{YExt}^1(K_2,W)$ be the class of $X$, and let $v_*:\operatorname{YExt}^1(K_2,Y)\to\operatorname{YExt}^1(K_2,W)$ be pushout along $v$. An extension class $\xi$ has a map to $X$ of the type in step 2.2 exactly when $v_*(\xi)=\eta$: pushing out its left endpoint along $v$ produces an extension with endpoints $W,K_2$, and a fixed-end map to $X$ exists precisely when that pushout is equivalent to $X$. For any one such class and any fixed representative sequence, the set of maps to $X$ is a torsor for $\operatorname{Hom}(K_2,W)$, because the difference of two maps vanishes on $Y$ and therefore factors uniquely through the quotient $J\to K_2$. [F2, step 2.2, construct]

3.2 The left side of the claimed identity is $\sum_{[J]}|\mathcal C_J|/a_J$, where $\mathcal C_J$ is the finite set of pairs of endpoint-labelled exact sequences with middle $J$. By the orbit–stabilizer formula for $\operatorname{Aut}(J)$, it equals the sum over cross isomorphism classes of the reciprocal of their stabilizer size. By step 2.1, each class over a fixed square contributes $1/|\operatorname{Hom}(K_2,L_1)|$. [step 2.1, given, construct]

4.1 The exact Yoneda sequence of [F1] for $0\to L_1\to Y\xrightarrow{v}W\to0$ is $0\to\operatorname{Hom}(K_2, L_1)\to\operatorname{Hom}(K_2, Y) \to\operatorname{Hom}(K_2, W)\to\operatorname{YExt}^1(K_2, L_1) \to\operatorname{YExt}^1(K_2, Y)\xrightarrow{v_*} \operatorname{YExt}^1(K_2, W)\to0.$ The final zero follows from $\operatorname{YExt}^2(K_2,L_1)=0$. Hence $v_*$ is surjective, so $v_*^{-1}(\eta)$ is nonempty and has cardinality $|v_*^{-1}(\eta)| =\frac{|\operatorname{YExt}^1(K_2, L_1)|\, | \operatorname{Hom}(K_2, Y)|} {|\operatorname{Hom}(K_2, W)|\, |\operatorname{Hom}(K_2, L_1)|}.$ This follows by taking cardinalities successively in the finite exact sequence: the kernel of $v_*$ is the image of $\operatorname{YExt}^1(K_2,L_1)$, whose kernel is the image of $\operatorname{Hom}(K_2,W)$; the first three Hom terms have the displayed orders by exactness. [F1, step 3.1, given, algebra]

4.2 For a fixed Yoneda class $\xi$ with middle object $J$, all labelled short exact sequences representing $\xi$ form one $\operatorname{Aut}(J)$-orbit. The stabilizer consists of automorphisms $1+i f p$ with $f:K_2\to Y$; its cardinality is $|\operatorname{Hom}(K_2,Y)|$, since $(i f p)^2=0$. Hence the orbit has size $a_J/|\operatorname{Hom}(K_2,Y)|$. By step 3.1 each representative has $|\operatorname{Hom}(K_2,W)|$ compatible maps to $X$. By step 2.1 each cross has stabilizer $|\operatorname{Hom}(K_2,L_1)|$. Dividing the number of representatives and maps by the cross orbit size, the class $\xi$ contributes $\frac{|\operatorname{Hom}(K_2, W)|\, |\operatorname{Hom}(K_2, L_1)|} {|\operatorname{Hom}(K_2, Y)|}$ cross isomorphism classes over $S$. [step 2.1, step 3.1, given, construct]

5.1 Summing the contribution in step 4.2 over all classes in $v_*^{-1}(\eta)$ and substituting the fiber cardinality in step 4.1 shows that exactly $|\operatorname{YExt}^1(K_2,L_1)|$ cross isomorphism classes lie over $S$. [step 4.1, step 4.2, algebra]

6.1 The product $P^K_{K_2,K_1}P^L_{L_2,L_1}P^M_{K_2,L_2}P^N_{K_1,L_1}$ counts labelled square data. The action of $\operatorname{Aut}(K_1)\times\operatorname{Aut}(K_2)\times \operatorname{Aut}(L_1)\times\operatorname{Aut}(L_2)$ is free: an automorphism fixing the adjacent monomorphism is the identity by monicity, and one fixing the adjacent epimorphism is the identity by epicity. Thus division by the four automorphism numbers gives the number of square isomorphism classes. Each square has $|\operatorname{YExt}^1(K_2,L_1)|$ cross classes by step 5.1, each weighted by $1/|\operatorname{Hom}(K_2,L_1)|$ by step 3.2. This is exactly the right side of the identity. [step 5.1, step 3.2, construct]

7.1 Both sums are finite. The left sum has finite support in $J$ because $\operatorname{YExt}^1(M,N)$ is finite. For the right sum, a square datum determines the composites $L\to L_2\hookrightarrow M$ and $N\to K_1\hookrightarrow K$. Their images, kernels and cokernels determine the four corner classes $(L_1,L_2,K_1,K_2)$. The finite sets $\operatorname{Hom}(L,M)$ and $\operatorname{Hom}(N,K)$ therefore allow only finitely many such quadruples. The counted orbit sums are finite, and their equality in step 6.1 is the stated identity. [F1, step 6.1, given] ∎

