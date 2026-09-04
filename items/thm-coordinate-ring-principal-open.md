---
id: thm-coordinate-ring-principal-open
kind: theorem
title: "Regular functions on a principal open are the principal localization of the coordinate ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-localisation, def-principal-open-classical-variety, def-coordinate-ring-affine-algebraic-set, def-vanishing-ideal-affine-set, lem-principal-opens-form-affine-basis, lem-density-nonempty-open-affine-variety, prop-localisation-zero-equality-and-kernel-criteria, cor-strong-nullstellensatz-two-inclusions]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Definition 3.8 through Proposition 3.11"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Lemma 1.6.3"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Statement

Assume the Axiom of Choice.

Let $X$ be a classical affine variety over an algebraically closed field $k$,
and let $\overline f\in k[X]$. Put $U=D_X(\overline f)$.

A function $\varphi:U\to k$ is called **regular on $U$** if there exist finitely
many pairs $(\overline g_i,\overline h_i)$ in $k[X]\times k[X]$ such that
$$ U=\bigcup_{i=1}^r D_X(\overline h_i) $$
and
$$\varphi(x)=\frac{\overline g_i(x)}{\overline h_i(x)}\qquad\text{for every }x\in D_X(\overline h_i).$$

Write $\mathcal O_X(U)$ for the ring of regular functions on $U$.

Then evaluation induces a ring isomorphism
$$ k[X]_{\overline f}\xrightarrow{\sim}\mathcal O_X(U). $$
If $U=\varnothing$, both sides are the zero ring.

## Facts & Assumptions

**Given:** The Axiom of Choice, a classical affine variety $X$ over an algebraically closed field $k$, an element $\overline f\in k[X]$, and the principal open $U=D_X(\overline f)$.

[L1] The principal localization $k[X]_{\overline f}$ consists of fractions $a/\overline f^{\,n}$, and localizing at $0$ gives the zero ring ([[def-principal-localisation]]).

[L2] In a localization, $a/\overline f^{\,n}=0$ exactly when $\overline f^{\,m}a=0$ for some $m\ge 0$ ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[L3] An element of $k[X]$ is zero exactly when any polynomial representative vanishes on all of $X$ ([[def-coordinate-ring-affine-algebraic-set]], [[def-vanishing-ideal-affine-set]]).

[L4] Principal opens are open, and $$D_X(\overline h_i)\cap D_X(\overline h_j)=D_X(\overline h_i\overline h_j)$$ ([[lem-principal-opens-form-affine-basis]]).

[L5] Every nonempty open subset of a classical affine variety is dense ([[lem-density-nonempty-open-affine-variety]]).

[L6] Assuming the Axiom of Choice, over an algebraically closed field one has $$ I(V(J))=\sqrt J $$ for every ideal $J$ in a polynomial ring ([[cor-strong-nullstellensatz-two-inclusions]]).

## Proof

**Proof technique:** direct.

1.1 A fraction $a/\overline f^{\,n}\in k[X]_{\overline f}$ defines a function on $U$ by $$ x\longmapsto \frac{a(x)}{\overline f(x)^n}. $$ If $a/\overline f^{\,n}=b/\overline f^{\,m}$, then after passing to the common denominator $\overline f^{\,n+m}$ their difference is $c/\overline f^{\,n+m}$ with $c=a\overline f^{\,m}-b\overline f^{\,n}$. By [L2], some power of $\overline f$ annihilates $c$. Evaluating at a point of $U$, where $\overline f$ is nonzero, forces $c(x)=0$, so the two fractions give the same function. Thus there is a well-defined ring homomorphism $\Phi:k[X]_{\overline f}\to\mathcal O_X(U)$. [L1, L2, given, algebra]

1.2 If $U=\varnothing$, then $\overline f(x)=0$ for every $x\in X$, so $\overline f=0$ in $k[X]$. By [L1], the localization $k[X]_{\overline f}$ is the zero ring. The only function $\varnothing\to k$ is both additive and multiplicative identity, so $\mathcal O_X(U)$ is also the zero ring. Hence the statement is proved in this boundary case. [L1, given]

1.3 Let $\varphi\in\mathcal O_X(U)$, given by a finite principal-open cover $U=\bigcup_{i=1}^r D_X(\overline h_i)$ and local formulas $$\varphi=\frac{\overline g_i}{\overline h_i}\qquad\text{on }D_X(\overline h_i).$$ Discard the indices with $D_X(\overline h_i)=\varnothing$; the remaining family still covers the nonempty open set $U$, and relabel it as $D_X(\overline h_1),\ldots,D_X(\overline h_r)$. For any $i,j$, the overlap $$D_X(\overline h_i)\cap D_X(\overline h_j)=D_X(\overline h_i\overline h_j)$$ is open by [L4]. It is also nonempty because $D_X(\overline h_j)$ is a nonempty open subset of $X$, while [L5] makes $D_X(\overline h_i)$ dense in $X$. On that overlap the two local expressions for $\varphi$ agree, so the class $$\overline g_i\overline h_j-\overline g_j\overline h_i\in k[X]$$ vanishes on a dense subset of $X$ and therefore on all of $X$. By [L3], $$\overline g_i\overline h_j=\overline g_j\overline h_i\qquad\text{in }k[X].$$ [L3, L4, L5, given]

1.4 Choose representatives $f,h_1,\ldots,h_r\in k[x_1,\ldots,x_n]$ of $\overline f,\overline h_1,\ldots,\overline h_r$. Because $D_X(\overline f)=\bigcup_{i=1}^r D_X(\overline h_i)$, a point of $X$ lies outside $U$ exactly when all $h_i$ vanish there. Thus $$V(I(X)+(f))=V(I(X)+(h_1,\ldots,h_r))$$ inside $\mathbf A_k^n$. Applying [L6] gives $$f\in I(V(I(X)+(f)))=I(V(I(X)+(h_1,\ldots,h_r)))=\sqrt{I(X)+(h_1,\ldots,h_r)},$$ so for some $M\ge1$ there exist $b_1,\ldots,b_r\in k[x_1,\ldots,x_n]$ and $u\in I(X)$ with $$f^M=u+b_1h_1+\cdots+b_rh_r.$$ Passing to $k[X]$ yields $$\overline f^{\,M}=\overline b_1\,\overline h_1+\cdots+\overline b_r\,\overline h_r.$$ [L6, given, algebra]

2.1 Assume now that $U\ne\varnothing$. To prove injectivity, let $a/\overline f^{\,n}\in k[X]_{\overline f}$ map to the zero function on $U$. Then $a(x)=0$ for every $x\in U$. On the complement $X\setminus U$ one has $\overline f(x)=0$. Therefore $(a\overline f)(x)=0$ for every $x\in X$, so $a\overline f=0$ in $k[X]$. By [L2], this implies $a/\overline f^{\,n}=0$ in $k[X]_{\overline f}$. Thus $\Phi$ is injective. [L2, step 1.1, algebra]

2.2 Define $$a:=\overline b_1\,\overline g_1+\cdots+\overline b_r\,\overline g_r\in k[X].$$ Fix $x\in D_X(\overline h_j)$. Using the relations from step 1.3 and then step 1.4, we compute $$a(x)\overline h_j(x)=\sum_{i=1}^r \overline b_i(x)\overline g_i(x)\overline h_j(x)=\overline g_j(x)\sum_{i=1}^r \overline b_i(x)\overline h_i(x)=\overline g_j(x)\overline f(x)^M.$$ Since $\overline h_j(x)\ne0$, division in the field $k$ gives $$\frac{a(x)}{\overline f(x)^M}=\frac{\overline g_j(x)}{\overline h_j(x)}=\varphi(x).$$ Because the $D_X(\overline h_j)$ cover $U$, this holds for every $x\in U$. Hence $\varphi=\Phi(a/\overline f^{\,M})$, so $\Phi$ is surjective. [step 1.3, step 1.4, algebra, construct]

3.1 Step 2.1 proves injectivity, step 2.2 proves surjectivity, and step 1.2 handles the empty-open boundary. Therefore $\Phi:k[X]_{\overline f}\xrightarrow{\sim}\mathcal O_X(U)$ is a ring isomorphism. [step 1.2, step 2.1, step 2.2] ∎
