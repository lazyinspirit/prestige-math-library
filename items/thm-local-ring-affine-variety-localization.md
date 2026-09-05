---
id: thm-local-ring-affine-variety-localization
kind: theorem
title: "The local ring at a point of an affine variety is the localization at its maximal ideal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coordinate-ring-affine-algebraic-set, def-germ-and-local-ring-classical-variety, def-localisation-at-a-prime-ideal, lem-maximal-ideals-are-points-over-algebraically-closed-field, lem-principal-opens-form-affine-basis, thm-coordinate-ring-principal-open, thm-localisation-at-a-prime-is-local, prop-localisation-zero-equality-and-kernel-criteria]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Corollary 3.12"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, 5.1.10"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

Let $X$ be a classical affine variety over an algebraically closed field $k$,
let $x \in X$, and let
$$ \mathfrak m_x:=\{\overline f \in k[X]:\overline f(x)=0\}. $$
Then there is a canonical isomorphism of local rings
$$ \mathcal O_{X,x}\xrightarrow{\sim}k[X]_{\mathfrak m_x}. $$

## Facts & Assumptions

**Given:** The Axiom of Choice, a classical affine variety $X$ over an algebraically closed field $k$, and a point $x \in X$.

[L1] The local ring $\mathcal O_{X,x}$ is the ring of germs of regular functions near $x$ ([[def-germ-and-local-ring-classical-variety]]).

[L2] The point $x$ corresponds to the maximal ideal $\mathfrak m_x \subseteq k[X]$ of functions vanishing at $x$ ([[lem-maximal-ideals-are-points-over-algebraically-closed-field]]).

[L3] Localisation at a prime ideal uses as denominators exactly the elements outside that prime ([[def-localisation-at-a-prime-ideal]]).

[L4] Every open neighbourhood of $x$ contains a principal open neighbourhood $D_X(s)$ of $x$ ([[lem-principal-opens-form-affine-basis]]).

[L5] Assuming the Axiom of Choice, for every principal open $D_X(s)$, regular functions on it are exactly the elements of $k[X]_s$ ([[thm-coordinate-ring-principal-open]]).

[L6] Equality in a localisation is detected by clearing denominators after multiplying by one more denominator from the multiplicative set ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[L7] The localisation $k[X]_{\mathfrak m_x}$ is a local ring ([[thm-localisation-at-a-prime-is-local]]).

## Proof

**Proof technique:** direct.

1.1 Let $f_x \in \mathcal O_{X,x}$ be a germ, represented by a regular function $f$ on an open neighbourhood $U$ of $x$. By [L4], choose a principal open neighbourhood $D_X(s)$ with $x \in D_X(s) \subseteq U$. Then [L5] identifies $f|_{D_X(s)}$ with some fraction $a/s^n \in k[X]_s$. Because $x \in D_X(s)$, the denominator $s$ does not vanish at $x$, so [L2] and [L3] give $s \notin \mathfrak m_x$. Define $\Phi(f_x):=a/s^n \in k[X]_{\mathfrak m_x}$. This gives a candidate image for the germ $f_x$. [L2, L3, L4, L5, given, choose]

1.2 Conversely, let $a/s \in k[X]_{\mathfrak m_x}$. By [L2] and [L3], $s(x) \ne 0$, so $x \in D_X(s)$. On that principal open, the function $y\mapsto a(y)/s(y)$ is regular by [L5], hence defines a germ at $x$. Put $\Psi(a/s):=(a/s)_x$. This gives the inverse candidate on localisation fractions. [L2, L3, L5, given]

2.1 The value in step 1.1 is independent of the representative. Indeed, if the same germ is also represented by $g$ on a neighbourhood $V$, choose by [L4] a principal open $D_X(t)$ with $x \in D_X(t) \subseteq U \cap V$ on which $f=g$. By [L5], the restrictions of $f$ and $g$ give equal fractions in $k[X]_t$. Since $t \notin \mathfrak m_x$ by [L2] and [L3], the equality criterion [L6] makes their images equal in the further localisation $k[X]_{\mathfrak m_x}$. Thus $\Phi$ is well defined. [L2, L3, L4, L5, L6, step 1.1]

2.2 If $a/s=b/u$ in $k[X]_{\mathfrak m_x}$, then [L6] gives $t \notin \mathfrak m_x$ with $t(au-bs)=0$ in $k[X]$. On the principal open $D_X(stu t)$ every factor $s$, $u$, and $t$ is nonzero. Evaluating the relation there gives $$ t(y)\bigl(a(y)u(y)-b(y)s(y)\bigr)=0, $$ and division by $t(y)\ne0$ in the field $k$ yields $a(y)u(y)=b(y)s(y)$. Therefore $a/s=b/u$ as ordinary functions on $D_X(stu t)$. Since $x \in D_X(stu t)$ by [L2] and [L3], the two regular functions have the same germ at $x$. Thus $\Psi$ is well defined. [L2, L3, L6, step 1.2, algebra]

2.3 Start with a germ $f_x$. Choosing a principal-open representative as in step 1.1, the construction of $\Psi(\Phi(f_x))$ recovers exactly the germ of that same representative, so $\Psi(\Phi(f_x))=f_x$. [step 1.1, step 1.2]

2.4 Start with a fraction $a/s \in k[X]_{\mathfrak m_x}$. The germ constructed in step 1.2 is represented on $D_X(s)$ by the regular function corresponding under [L5] to the same fraction $a/s$. Applying $\Phi$ therefore returns $a/s$. Hence $\Phi(\Psi(a/s))=a/s$. [L5, step 1.1, step 1.2]

3.1 Steps 2.3 and 2.4 show that $\Phi$ and $\Psi$ are inverse ring homomorphisms. By [L7], the target is local, so $\mathcal O_{X,x}$ is canonically identified with the localisation $k[X]_{\mathfrak m_x}$ as a local ring. [L1, L7, step 2.3, step 2.4] ∎
