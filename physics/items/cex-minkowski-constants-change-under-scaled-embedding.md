---
id: cex-minkowski-constants-change-under-scaled-embedding
kind: counterexample
title: "Mixing scaled and unscaled Minkowski covolumes fails"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-minkowski-embedding-of-a-number-field
  - thm-covolume-of-an-ideal-lattice
  - thm-ring-of-integers-of-a-quadratic-field
  - cor-discriminant-of-a-quadratic-field
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - cor-minkowski-convex-body-theorem-at-equality
  - def-full-euclidean-lattice-and-covolume
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
  - thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Proposition 4.26, pp.79-80."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§7.1 Lemma 7.1.7, pp.80-81."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement refuted

For $K=\mathbb Q(i)$ the unscaled Minkowski image of $\mathcal O_K$ is
$\mathbb Z^2$, of covolume $1$, and the $\sqrt2$-scaled image, obtained by
multiplying both real coordinates of the unscaled embedding by $\sqrt2$, is
the lattice $\sqrt2\,\mathbb Z^2$, of covolume $2$. The statement refuted is
the claim that the unscaled covolume $2^{-r_2}\sqrt{|d_K|}=1$ may serve as
the covolume of the scaled lattice $\sqrt2\,\mathbb Z^2$ in the equality form
of Minkowski's theorem. Assume the Axiom of Choice. The closed disc of radius
$6/5$ has area $36\pi/25>4=2^2\cdot1$ and is compact, convex and centrally
symmetric, so under that claim Minkowski's equality criterion would predict a
nonzero point of $\sqrt2\,\mathbb Z^2$ in the disc; but every nonzero vector
of $\sqrt2\,\mathbb Z^2$ has length $\sqrt2>6/5$. The correct covolume of the
scaled lattice is $2$, and with the threshold $2^2\cdot2=8>36\pi/25$ the true
criterion makes no prediction. Mixing the two normalizations is therefore
invalid.

## Facts & Assumptions

**Given:** The Axiom of Choice, the field $K=\mathbb Q(i)$, its ring of
integers $\mathcal O_K=\mathbb Z[i]$, the unscaled Minkowski embedding
$\sigma$, and the closed disc $D=\{x\in\mathbb R^2:|x|\le6/5\}$.

[A1] The Axiom of Choice implies the Axiom of Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]), the choice
hypothesis of the area computation [F5], invoked in step 1.2; the
equality-form Minkowski criterion [F6] is applied under the Axiom of Choice
assumed in the statement.

[F1] For $d=-1$ the quadratic-field formulas give
$\mathcal O_{\mathbb Q(\sqrt{-1})}=\mathbb Z[\sqrt{-1}]=\mathbb Z[i]$ and
$d_K=4\cdot(-1)=-4$
([[thm-ring-of-integers-of-a-quadratic-field]],
[[cor-discriminant-of-a-quadratic-field]]).

[F2] $K=\mathbb Q(i)$ has signature $(r_1,r_2)=(0,1)$, and the unscaled
Minkowski embedding sends $x$ to the pair $(\operatorname{Re}\tau(x),
\operatorname{Im}\tau(x))$ of the single complex embedding; hence
$\sigma(\mathcal O_K)=\mathbb Z^2$
([[def-minkowski-embedding-of-a-number-field]]).

[F3] For a nonzero integral ideal $\mathfrak a$ the unscaled image is a full
lattice with $\operatorname{covol}(\sigma(\mathfrak a))
=2^{-r_2}\sqrt{|d_K|}\,N\mathfrak a$; applied to
$\mathfrak a=\mathcal O_K$ this gives
$\operatorname{covol}(\sigma(\mathcal O_K))=2^{-1}\sqrt4=1$
([[thm-covolume-of-an-ideal-lattice]]).

[F4] For a full lattice with $\mathbb Z$-basis $b_1,\dots,b_n$ the covolume is
$|\det(b_1,\dots,b_n)|$; the scaled lattice $\sqrt2\,\mathbb Z^2$ has basis
$\sqrt2 e_1,\sqrt2 e_2$, so its covolume is $|\det(\sqrt2 I_2)|=2$
([[def-full-euclidean-lattice-and-covolume]]).

[F5] The closed disc of radius $\rho$ has area $\pi\rho^2$
([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F6] Minkowski convex-body theorem at equality: a compact convex centrally
symmetric $C\subseteq\mathbb R^n$ with
$\operatorname{vol}(C)\ge2^n\operatorname{covol}(\Lambda)$ contains a nonzero
point of the full lattice $\Lambda$
([[cor-minkowski-convex-body-theorem-at-equality]]).

[F7] The finite-remainder Gregory--Leibniz formula at $N=7$ has partial sum
$33976/45045>3/4$ and positive remainder, so $\pi>3>25/9$. At $N=2$ the
partial sum is $13/15$ and the remainder is negative, so
$\pi/4<13/15<1$ and $\pi<4$
([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

## Proof

1.1 By [F1] the field is $K=\mathbb Q(i)$ with $\mathcal O_K=\mathbb Z[i]$ and $d_K=-4$, so $r_2=1$ and [F3] gives $\operatorname{covol}(\sigma(\mathcal O_K))=2^{-1}\sqrt{4}=1$, while [F2] identifies the unscaled lattice itself as $\sigma(\mathcal O_K)=\mathbb Z^2$. [F1, F2, F3]

1.2 The disc $D=\{x\in\mathbb R^2:|x|\le6/5\}$ is compact, convex and centrally symmetric, and by [F5], with the Countable Choice hypothesis supplied by [A1], its area is $\pi(6/5)^2=36\pi/25$. By [F7], $\pi>3>25/9$, so this area exceeds $4=2^2\cdot1$. [F5, F7, A1, given, algebra]

2.1 The scaled lattice is $\Gamma:=\sqrt2\,\mathbb Z^2=\{(\sqrt2a,\sqrt2b):a,b\in\mathbb Z\}$, the image of $\mathcal O_K$ under the coordinatewise $\sqrt2$-scaling of $\sigma$; by [F4] its covolume is $\operatorname{covol}(\Gamma)=|\det(\sqrt2I_2)|=2$. [F4, step 1.1]

3.1 Every nonzero $x=(\sqrt2a,\sqrt2b)\in\Gamma$ has $|x|^2=2(a^2+b^2)\ge2>36/25=(6/5)^2$, so $|x|>6/5$ and $x\notin D$; hence $D\cap\Gamma=\{0\}$. [step 2.1, algebra]

4.1 If the unscaled covolume $1$ were used as the covolume of $\Gamma$, then step 1.2 would verify all hypotheses of the equality-form criterion [F6] for $C=D$ and $\Lambda=\Gamma$, and [F6] would produce a nonzero point of $D\cap\Gamma$, contradicting step 3.1. This refutes the mixed-convention claim. [F6, step 1.2, step 3.1]

5.1 The correct criterion is not violated: by step 2.1 the true covolume of $\Gamma$ is $2$, so the threshold is $2^2\cdot2=8$. By [F7], $36\pi/25<144/25<8$, so the hypothesis of [F6] fails and [F6] yields no lattice point in $D$. [F6, F7, step 2.1, step 1.2] ∎

## Remarks

The two normalizations differ by the factor $\sqrt2$ in each complex
coordinate: the unscaled convention has
$\operatorname{covol}(\sigma(\mathfrak a))=2^{-r_2}\sqrt{|d_K|}N\mathfrak a$,
while the scaled convention has covolume $\sqrt{|d_K|}N\mathfrak a$ and
$\sqrt2$-weighted complex coordinates. The numerical coincidence that
$36\pi/25$ lies between $4=2^2\cdot1$ and $8=2^2\cdot2$ is what makes the
disc of radius $6/5$ a witness: it is large enough for the wrong threshold
and too small for the right one.
