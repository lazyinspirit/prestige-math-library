---
id: cor-hypersurface-singular-locus-gradient
kind: corollary
title: "The gradient test for a reduced hypersurface"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-zariski-tangent-space-jacobian-kernel
  - def-singular-and-regular-loci-variety
  - lem-local-dimension-reduced-variety-components
  - thm-principal-subvariety-codimension-one
  - thm-affine-variety-dimension-coordinate-ring
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - cor-strong-nullstellensatz-two-inclusions
  - def-axiom-of-choice
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §4a Definition 2.1 and Examples 4.5–4.6; §4d Definitions 4.22–4.23 and the hypersurface Jacobian criterion; §4h Definition 4.35"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, let
$n\geq1$, and let $f\in k[t_1,\ldots,t_n]$ be nonconstant and squarefree,
meaning that no irreducible factor occurs more than once. Put $X=V(f)$ with
its reduced classical variety structure. For every $a\in X(k)$, the point $a$
is singular exactly when every formal first partial derivative of $f$ vanishes
at $a$. Equivalently,
$$X_{\mathrm{sing}}=V(f,\partial_1f,\ldots,\partial_nf)\quad\text{as subsets of }k^n.$$

The affine scheme $\operatorname{Spec}(k[t_1,\ldots,t_n]/(f))$ uses the actual
ideal $(f)$, which is already radical for squarefree $f$. For a non-squarefree
equation, passing from its principal ideal to its radical can change the scheme
and its tangent space; for example, $t^2$ and its radical $t$ have different
tangent spaces at $0$.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, a finite integer $n\geq1$,
a nonconstant squarefree polynomial $f\in R=k[t_1,\ldots,t_n]$, the
classical zero set $X=V(f)$, and a point $a\in X(k)$. The word squarefree
means that the finite factorization of $f$ in the polynomial-ring UFD has no
repeated irreducible factor.

[F1] [[thm-zariski-tangent-space-jacobian-kernel]]: for an affine scheme over
any field, its tangent space at a rational point is the kernel of the Jacobian
matrix of any finite generating list for the actual scheme ideal.

[F2] [[def-singular-and-regular-loci-variety]]: for a reduced classical
finite-type space over an algebraically closed field and a closed point, the
singular locus is the complement of the regular locus, and regularity is
characterized by tangent dimension equalling the maximum dimension of the
irreducible components through the point.

[F3] [[lem-local-dimension-reduced-variety-components]]: under AC, the local
dimension at a closed point of a reduced classical finite-type space is the
maximum dimension of its irreducible components through that point.

[F4] [[thm-principal-subvariety-codimension-one]]: under AC, the zero locus of
a nonzero nonunit on an irreducible affine variety is nonempty and each
irreducible component has dimension one less than the ambient variety.

[F5] [[thm-affine-variety-dimension-coordinate-ring]]: under AC, the dimension
of a nonempty affine algebraic set is the Krull dimension of its coordinate
ring.

[F6] [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]: for a field
$k$ and finite $n$, $\dim k[t_1,\ldots,t_n]=n$.

[F7] [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]: the finite
variable polynomial ring over a field is a UFD, and its irreducible elements
are prime.

[F8] [[cor-strong-nullstellensatz-two-inclusions]]: under AC and for an
algebraically closed field, $I(V(J))=\sqrt J$ for every polynomial ideal $J$.

[F9] [[def-axiom-of-choice]]: AC says every family of nonempty sets has a
choice function; its uses here are inherited through [F2]–[F5] and [F8].

## Proof

**Proof technique:** direct.

1.1 The polynomial ring $R$ is a UFD by [F7], so write $f=u q_1\cdots q_m$ with $u\in k^\times$ and pairwise nonassociate irreducibles $q_i$; each $q_i$ is prime. If $g^r\in(f)$ for some $r\geq1$, every $q_i$ divides $g^r$ and hence divides $g$. Since the $q_i$ are distinct prime factors, their product divides $g$, so $g\in(f)$ and $(f)$ is radical. By [F8], $I(X)=I(V(f))=\sqrt{(f)}=(f)$, so $X$ is reduced and its affine scheme is $\operatorname{Spec}(R/(f))$ with the actual equation ideal. This finite factorization argument makes no choice; AC is used here only for the Nullstellensatz identification. [F7, F8, F9, given, algebra]

1.2 The affine space $\mathbb A_k^n$ is irreducible because $R$ is a domain by [F7], and [F5] and [F6] give $\dim\mathbb A_k^n=n$. The polynomial $f$ is a nonzero nonunit of its coordinate ring, so [F4] gives that $X$ is nonempty and each irreducible component $X_i$ has dimension $n-1$. For the fixed closed point $a$, [F3] therefore gives $\dim\mathcal O_{X,a}=\max_{a\in X_i}\dim X_i=n-1$. Component dimensions come from [F4], and AC identifies their maximum with local dimension through [F3]. [F3, F4, F5, F6, F7, F9, given, algebra]

1.3 By [F1] applied to the actual ideal $(f)$ and its one-element generating list, the intrinsic tangent space at $a$ is the kernel of the single row $df(a)=\bigl(\partial_1f(a),\ldots,\partial_nf(a)\bigr):k^n\longrightarrow k$. If some coefficient $c_j=\partial_jf(a)$ is nonzero, the equation $\sum_i\partial_if(a)v_i=0$ determines $v_j=-c_j^{-1}\sum_{i\ne j}\partial_if(a)v_i$, so the other $n-1$ coordinates vary freely and $\dim_kT_aX=n-1$. If every partial vanishes, the kernel is all of $k^n$ and has dimension $n$. These alternatives include every characteristic because [F1] uses formal polynomial derivatives without a characteristic restriction. [F1, given, algebra]

2.1 The point $a$ is closed in the reduced classical finite-type space $X$. By [F2], it is regular exactly when $\dim_kT_aX=\max_{a\in X_i}\dim X_i$. Step 1.2 identifies this maximum as $n-1$, and step 1.3 shows that equality holds exactly when some partial derivative of $f$ is nonzero. Since the singular locus is the complement of the regular locus by [F2], $a$ is singular exactly when all partial derivatives vanish. Since $f(a)=0$, this proves both inclusions in the displayed equality. The choice use is inherited through [F2]–[F4], as recorded in [F9]. [F2, F3, F4, F9, step 1.2, step 1.3, given, algebra]

3.1 The non-squarefree distinction is visible in one variable: in $k[t]/(t^2)$ at $0$ the actual Jacobian row is $(2t)|_0=0$ in every characteristic, so [F1] gives tangent space $k$, whereas for the radical ideal $(t)$ the row is $(1)$ and the tangent space is zero. Thus radicalizing a non-squarefree equation changes its tangent computation; for the squarefree $f$ here, step 1.1 proves radicalization is redundant. For $n=1$ and $f=t$, the unique point has nonzero derivative, tangent dimension zero and local dimension zero, so it is regular. For the reducible squarefree example $f=xy$ in $k[x,y]$, at the origin the gradient $(y,x)$ vanishes, the tangent dimension is two and the local dimension is one; away from the origin on either axis the gradient is nonzero and tangent dimension is one, so those points are regular. The zero tangent vector lies in every Jacobian kernel. Here $n\geq1$ and nonconstant nonzero $f$ make the principal-subvariety theorem applicable; [F4] makes the hypersurface nonempty, so the empty case has no instance. Steps 1.3–2.1 establish both implications, and no arbitrary choice is made beyond the declared AC uses. [F1, F4, F9, step 1.1, step 1.2, step 1.3, step 2.1, given, algebra] ∎
