---
id: ex-the-rational-simple-block-of-the-quaternion-group
kind: example
title: The rational simple quaternion block
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Weizhe Zheng, Lectures on Algebra (10 January 2025)
      url: https://server.mcm.ac.cn/~zheng/algebra.pdf
      locator: Example 3.7.4(3), p.125 (norm calculation adapted to Q); Proposition 4.3.2
    - title: Gábor Wiese, Galois Representations
      url: https://math.uni.lu/wiese/notes/GalRep.pdf
      locator: Remark 2.4.2(ii), p.34; Exercise 14, p.70 (real quaternion example adapted to Q and Q(i))
status: draft
origin: pipeline
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
deps: ["thm-galois-orbits-classify-simple-modules-after-splitting-base-change", "thm-simple-modules-over-semisimple-rings", "def-trace-of-an-endomorphism", "def-quaternion-group-of-order-eight", "prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two", "thm-group-ring-is-a-unital-algebra-with-basis-g"]
---

## Example

Write the quaternion group as $Q_8=\{1,z,u,zu,v,zv,uv,zuv\}$, where
$z$ is the group element $-1$, $z^2=1$, $u^2=v^2=z$ and $vu=zuv$.
The central idempotent $e=(1-z)/2$ in $\mathbb Q[Q_8]$ cuts out the
four-dimensional division algebra
$$D=\mathbb Q[Q_8]e\cong(-1,-1)_{\mathbb Q}.$$
Its unique simple left module is $D$ itself. For $E=\mathbb Q(i)$,
$E\otimes_{\mathbb Q}D\cong M_2(E)$, and its left regular module is
$W\oplus W$, where $W=E^2$ is simple of degree two. The character of $W$
has values $2,-2,0,0,0$ on the classes
$\{1\},\{z\},\{u,zu\},\{v,zv\},\{uv,zuv\}$. Its Galois orbit is a
singleton but its descent multiplicity is two. In fact $E$ splits the entire
group algebra.

## Facts & Assumptions

[F1] The orbit classification gives the common scalar-extension multiplicity under the semisimple and splitting hypotheses: [[thm-galois-orbits-classify-simple-modules-after-splitting-base-change]].

[F2] A matrix-ring factor over a division ring has one simple left-module class, its column module: [[thm-simple-modules-over-semisimple-rings]].

[F3] Trace is the sum of the diagonal entries of a representing matrix: [[def-trace-of-an-endomorphism]].

[F4] The quaternion group is the set of eight signed basis quaternions, with multiplication inherited from the quaternion algebra: [[def-quaternion-group-of-order-eight]].

[F5] These elements form a group of order eight, and $z=-1$ has order two: [[prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]].

[F6] The group algebra has the group basis, with multiplication $[g][h]=[gh]$: [[thm-group-ring-is-a-unital-algebra-with-basis-g]].

## Verification

**Given:** $Q_8$ as in F4–F5, renamed with generators $u,v$, and $E=\mathbb Q(i)$ where $i^2=-1$.

1.1 The quaternion multiplication gives $z$ central, $u^2=v^2=z$, and $vu=zuv$. Thus $e^2=(1-2z+z^2)/4=e$ and $ze=-e$. The four elements $e,ue,ve,uve$ span $D$, since $(zh)e=-he$ for $h=1,u,v,uv$. They are rationally independent: $he=(h-zh)/2$ has its two nonzero coefficients on one of four disjoint pairs of the eight group-basis elements. Hence they form a basis. Write $x=ue$, $y=ve$, $w=uve$; then $x^2=y^2=w^2=-e$, $xy=w=-yx$, $yw=x=-wy$, and $wx=y=-xw$. [F6, F4, F5, algebra]

2.1 For $q=ae+bx+cy+dw$, put $\overline q=ae-bx-cy-dw$. Using the multiplication table, all mixed terms cancel and $q\overline q=\overline q q=(a^2+b^2+c^2+d^2)e$. For rational coefficients this sum is positive when $q\ne0$. Thus $q^{-1}=\overline q/(a^2+b^2+c^2+d^2)$ exists on both sides, and $D$ is a division algebra. Every nonzero left ideal contains an invertible element and hence $e$, so its left regular module is simple. F2 for a single $1\times1$ factor says this is its unique simple class. The zero quaternion needs no inverse; the unit is $e$. [F2, step 1.1, algebra]

2.2 Set $U=\begin{pmatrix}i&0\\0&-i\end{pmatrix}$ and $V=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. We have $U^2=V^2=-I$ and $VU=-UV$, so the multiplication table defines an $E$-algebra map $E\otimes_{\mathbb Q}D\to M_2(E)$ sending $e,x,y,w$ to $I,U,V,UV$. A linear combination of these images is $\begin{pmatrix}a+bi&c+di\\-c+di&a-bi\end{pmatrix}$. Every matrix occurs uniquely: its entries $r,s,t,h$ give $a=(r+h)/2$, $b=(r-h)/(2i)$, $c=(s-t)/2$, $d=(s+t)/(2i)$. Thus the map is an algebra isomorphism. [step 1.1, algebra]

3.1 Let $f=1-e=(1+z)/2$. The complementary block has basis $f,uf,vf,uvf$ by the same disjoint-pair argument. Here $zf=f$, so $uf,vf$ commute and square to $f$. Evaluating them independently at $\epsilon,\eta\in\{1,-1\}$ gives a map $\mathbb Q[Q_8]f\to\mathbb Q^4$. Its sign matrix has rows $(1,\epsilon,\eta,\epsilon\eta)$; the inner product of a row with itself is $4$, and with a different row is $(1+\epsilon\epsilon')(1+\eta\eta')=0$. Its inverse is one quarter its transpose. Hence $\mathbb Q[Q_8]\cong D\times\mathbb Q^4$ and, extending the displayed basis maps, $E[Q_8]\cong M_2(E)\times E^4$. The rational regular module is the direct sum of $D$ and four copies of $\mathbb Q$, each simple over its factor; the extended regular module is the sum of the two simple columns of $M_2(E)$ and four one-dimensional factors. Thus both regular modules are semisimple, and the displayed extended product is split, without an omitted block. The column simples over this product have only scalar endomorphisms (commute with matrix units), so it also satisfies the group splitting-field convention. [F6, F2, step 1.1, step 2.1, step 2.2, algebra]

3.2 The subspaces of matrices supported in the first column and in the second column are left ideals, each isomorphic to $W=E^2$ by reading that column. They have zero intersection and their sum is all of $M_2(E)$. F2 makes $W$ simple. Consequently $E\otimes_{\mathbb Q}D\cong W\oplus W$ as group modules, with multiplicity exactly two: its $E$-dimension is four and $\dim_EW=2$. [F2, step 2.2, algebra]

4.1 The polynomial $X^2+1$ has no rational root, and its distinct roots $i,-i$ lie in $E$. Thus $E/\mathbb Q$ is finite normal separable, with nontrivial automorphism $\sigma(i)=-i$. Coefficient conjugation sends $U$ to $-U$ and fixes $V$. Since $VUV^{-1}=-U$ and $VVV^{-1}=V$, conjugation by $V$ intertwines the representation with its coefficient-conjugate; these equations on the generators suffice on every group element. Therefore $[W]$ is Galois-stable. The hypotheses for F1 are all met by step 3.1 and this finite Galois extension. F1 identifies $D$ with this singleton orbit, and step 3.2 computes its common multiplicity as two. [F1, step 3.1, step 3.2, algebra]

5.1 The matrices for $1,z,u,v,uv$ are $I,-I,U,V,UV$. Their traces are $2,-2,0,0,0$ respectively; multiplying the last three by $-I$ keeps their traces zero. The class list follows directly from the relations: conjugation preserves each pair $\{h,zh\}$ for $h=u,v,uv$, and conjugation by a different generator exchanges its two members, whereas $1,z$ are central. Thus this list exhausts all eight elements and gives exactly the stated class values. All values lie in $\mathbb Q$. The trace of the rational regular module $D$ is twice this character after extension, since its extension is the displayed two column copies. [F3, F4, F5, step 2.2, step 3.2, algebra] QED

## Remarks

The norm computation restricts Zheng, Example 3.7.4(3), p.125, from real to
rational coefficients. Wiese, Exercise 14, p.70, suggests the real/complex
analogue but supplies no proof; the algebra and matrix calculations here
prove the rational example. Wiese, Remark 2.4.2(ii), p.34, distinguishes the
four-dimensional regular trace from this degree-two character.
