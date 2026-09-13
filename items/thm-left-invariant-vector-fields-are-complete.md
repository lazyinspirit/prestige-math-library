---
id: thm-left-invariant-vector-fields-are-complete
kind: theorem
title: Left-invariant vector fields are complete
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-left-and-right-invariant-vector-fields", "def-complete-vector-field", "def-integral-curve-of-a-vector-field", "thm-unique-maximal-integral-curve-through-each-point", "thm-chain-rule-for-differentials-of-smooth-maps", "prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Robert L. Bryant, An Introduction to Lie Groups and Symplectic Geometry
      url: https://math.duke.edu/~bryant/ParkCityLectures.pdf
      locator: Lecture 2, Proposition 4 and proof, printed pages 17--18
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Proposition 3.1 and proof of the real case, printed page 29
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Every left-invariant smooth vector field on a
finite-dimensional real Lie group is complete. Equivalently, its maximal flow
is defined on all of $\mathbb R\times G$. The countable-choice assumption is
used exactly through the supplied invariant-field and smooth-tangent-bundle
framework.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$ with
identity $e$, and a left-invariant smooth vector field $X$ on $G$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] Left invariance means
$d(L_a)_q(X_q)=X_{aq}$ for all $a,q\in G$.
[[def-left-and-right-invariant-vector-fields]].

[F3] Through every point there is a unique maximal integral curve on an open
interval containing zero.
[[thm-unique-maximal-integral-curve-through-each-point]].

[F4] An integral curve $c$ satisfies $c'(t)=X_{c(t)}$.
[[def-integral-curve-of-a-vector-field]].

[F5] Differentials obey the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

[F6] Completeness means that every maximal integral curve has domain all of
$\mathbb R$. [[def-complete-vector-field]].

[F7] A vector field is complete if and only if its maximal flow domain is all
of $\mathbb R\times G$.
[[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]].

## Proof

**Proof technique:** direct.

1.1 Let $c:I\to G$ be the maximal integral curve of $X$ with $c(0)=e$, supplied by [F3]. Since $I$ is open and contains $0$, fix $\delta>0$ with $(-\delta,\delta)\subseteq I$. [F3, choose]

2.1 For $s\in I$, define $\eta_s(t)=c(s)c(t-s)$ on $(s-\delta,s+\delta)$. By [F4], [F5], and left invariance [F2], $$\eta_s'(t)=d(L_{c(s)})_{c(t-s)}c'(t-s)=d(L_{c(s)})_{c(t-s)}X_{c(t-s)}=X_{\eta_s(t)}.$$ Also $\eta_s(s)=c(s)c(0)=c(s)$. After shifting the parameter by $s$, uniqueness in [F3] shows that $\eta_s$ and $c$ agree wherever their domains overlap near $s$, and hence on their whole interval overlap by the same local uniqueness argument. [F2, F3, F4, F5, step 1.1]

3.1 Suppose the right endpoint $b=\sup I$ were finite. Choose $s\in I$ with $b-\delta/2<s<b$. Then $s+\delta>b$, while step 2.1 makes $c$ and $\eta_s$ agree on the nonempty overlap. Splicing them therefore gives an integral curve through $e$ on the strictly larger interval $I\cup(s-\delta,s+\delta)$, contradicting maximality in [F3]. The identical argument at the left endpoint, using $s$ with $a<s<a+\delta/2$ if $a=\inf I$ were finite, excludes a finite left endpoint. Thus $I=\mathbb R$. [F3, step 1.1, step 2.1, construct, contradiction]

4.1 For an arbitrary $p\in G$, define $c_p(t)=pc(t)$ on all of $\mathbb R$. The calculation of step 2.1 with $c(s)$ replaced by the fixed element $p$ proves that $c_p$ is an integral curve of $X$, and $c_p(0)=p$. Its domain is already all of $\mathbb R$, so maximal uniqueness [F3] and [F6] show that $X$ is complete. [F2, F3, F4, F5, F6, step 2.1, step 3.1]

5.1 By [F7], completeness is equivalent to the maximal flow domain being all of $\mathbb R\times G$, which proves the final formulation in the statement. [F7, step 4.1]

6.1 A Lie group is nonempty. In dimension zero every smooth vector field is zero and its integral curves are constant; in dimension one the extension proof above is unchanged. Lie groups are boundaryless, so no boundary or finite-time endpoint exception remains, and no metric or nondegeneracy enters. The stated $\mathrm{AC}_\omega$ is inherited through [F2] and the smooth tangent-field framework; choosing one $\delta$ and one $s$ inside a single nonempty interval uses no family choice, and the endpoint argument adds no choice. The theorem is a direct assertion plus the supplied equivalence in [F7]; both directions of that cited equivalence are available. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
