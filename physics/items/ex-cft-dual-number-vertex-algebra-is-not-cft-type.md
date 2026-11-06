---
id: ex-cft-dual-number-vertex-algebra-is-not-cft-type
kind: example
title: Dual-number vertex algebra that is not of CFT type
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-formal-distribution-on-a-vector-space
  - def-vertex-algebra-state-field
  - def-conformal-vertex-algebra
dependency_roles:
  def-formal-distribution-on-a-vector-space: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, arXiv:0809.1380v3
      url: https://arxiv.org/pdf/0809.1380v3
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, 2024 author-hosted monograph
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Example

Let $V=\mathbb C[e]/(e^2)$. Each element has a unique form $a+be$ with $a,b\in\mathbb C$, and multiplication is $(a+be)(c+de)=ac+(ad+bc)e$; the vacuum is $\mathbf1=1$. Set $T=0$ and define $Y(a,z)b=ab$, viewed as a constant formal series for $a,b\in V$. Then $(V,\mathbf1,T,Y)$ is an ordinary vertex algebra. With the selected zero conformal vector $\omega=0$ and central charge $c=0$, its Virasoro modes are $L_n=0$ and its weight-zero subspace is $V_0=V$, of dimension two. It therefore fails the selected CFT-type condition $V_0=\mathbb C\mathbf1$. This is a formal algebraic example and asserts no analytic or physical CFT existence.

## Example references

[Christophe Nozaradan, Introduction to Vertex Algebras, §§4.2.1, 4.2.6, and 4.2.9](https://arxiv.org/pdf/0809.1380v3)

[Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §§2.7 and 2.10](https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf)

## Facts & Assumptions

**Given:** The two-dimensional complex vector space $V=\mathbb C1\oplus\mathbb Ce$ with the displayed commutative multiplication, vacuum $1$, zero translation $T$, constant state–field assignment $Y(a,z)b=ab$, and the selected CFT-type convention.

[A1] $V$ has basis $1,e$, unit $1$, and $e^2=0$; multiplication is the bilinear product stated in the Example.

[F1] [[def-formal-distribution-on-a-vector-space]]: an endomorphism-valued series is a field when its modes are vectorwise lower-truncated; in the convention $Y(a,z)=\sum_n a_{(n)}z^{-n-1}$ this is the field condition to check.

[F2] [[def-vertex-algebra-state-field]]: the required ordinary axioms are field truncation, vacuum and creation, translation covariance, and locality.

[F3] [[def-conformal-vertex-algebra]]: the selected conformal data require Virasoro modes with $L(-1)=T$ and the nonnegative grading, finite weight spaces, and vacuum-space condition $V_0=\mathbb C\mathbf1$.

## Verification

1.1 Every polynomial modulo $(e^2)$ reduces to $a+be$. If $a+be=0$ in the quotient, its degree-at-most-one representative lies in the ideal $(e^2)$ only when $a=b=0$. Thus $1,e$ are a basis, and the displayed multiplication is well-defined, commutative, associative, and unital with $e^2=0$. [given, A1, algebra]

2.1 Bilinearity of the product makes $a\mapsto M_a$ linear, so $Y$ is a linear state–field map. For each $a\in V$, $Y(a,z)$ is multiplication by $a$, independent of $z$. Its only possibly nonzero mode is $a_{(-1)}=M_a$, while $a_{(n)}=0$ for every $n\ne-1$. Hence for every $b\in V$ all modes with $n\ge0$ annihilate $b$, so $Y(a,z)$ is a field. [A1, F1, step 1.1, algebra]

2.2 Multiplication by $1$ is the identity and $T1=0$. Since $T=0$, $e^{zT}a=a$, while $Y(a,z)1=a\cdot1=a$. This verifies the vacuum and creation axioms. [A1, F2, step 1.1, algebra]

3.1 Both $[T,Y(a,z)]$ and $\partial_zY(a,z)$ vanish because $T=0$ and $Y(a,z)$ is constant. Thus translation covariance holds. [A1, F2, step 2.1, algebra]

4.1 For any $a,b\in V$, the multiplication operators commute: $Y(a,z)Y(b,w)=M_{ab}=M_{ba}=Y(b,w)Y(a,z)$ by commutativity of $V$. Therefore $[Y(a,z),Y(b,w)]=0$, so locality holds with exponent $N=0$. Along with the preceding field, vacuum/creation, and translation checks, this verifies every ordinary axiom in [F2]. [A1, F2, step 2.1, step 2.2, step 3.1, algebra]

4.2 Take $\omega=0$ and $c=0$. Then $Y(\omega,z)=0=\sum_{n\in\mathbb Z}L_nz^{-n-2}$, so coefficient uniqueness gives $L_n=0$ for all $n$. Their Virasoro relations hold because both the modes and the central charge are zero, and $L(-1)=0=T$. [A1, F2, F3, step 3.1, algebra]

5.1 Since $L(0)=0$, its zero eigenspace is $V_0=V$, and for each integer $n>0$ its $n$-eigenspace is $V_n=\{0\}$. Thus $V=\bigoplus_{n\ge0}V_n$, $L(0)$ is diagonalizable, and all weight spaces are finite-dimensional; but $\dim V_0=2$. [A1, F3, step 4.2, algebra]

6.1 The subspace $\mathbb C\mathbf1=\mathbb C1$ is one-dimensional, while $e$ is linearly independent of $1$ and belongs to $V_0=V$. Hence $V_0\ne\mathbb C\mathbf1$, so the selected CFT-type condition in [F3] fails. No analytic or physical conclusion is used. [A1, F3, step 5.1, algebra] ∎
