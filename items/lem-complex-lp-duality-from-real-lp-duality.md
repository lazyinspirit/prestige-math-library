---
id: lem-complex-lp-duality-from-real-lp-duality
kind: lemma
title: Complex Lp duality from real Lp duality
status: draft
origin: pipeline
deps: ["thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity", "def-complex-lp-and-euclidean-test-function-conventions", "thm-complex-holder-minkowski-and-the-quotient-norm", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed."
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
      locator: "Theorem 6.15; real arbitrary-measure representation supplied locally"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§10.1–§10.2, complex integration and Hölder conventions, pp. 281–287"
proof_strategy: direct
---

## Statement

**Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$.**  Let
$(X,\mathcal A,\mu)$ be any measure space, let $1<p<\infty$, and let $q$ be
conjugate to $p$.  Every bounded complex-linear functional
$\Lambda:L^p(\mu;\mathbb C)\to\mathbb C$ has a unique $h\in
L^q(\mu;\mathbb C)$ such that

$$\Lambda([f])=\int_Xfh\,d\mu\qquad([f]\in L^p(\mu;\mathbb C)),$$

where the pairing is bilinear, with no conjugation.  Moreover
$\lVert\Lambda\rVert=\lVert h\rVert_q$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an arbitrary measure space, conjugate exponents $1<p,q<\infty$, and a bounded complex-linear $\Lambda:L^p(\mu;\mathbb C)\to\mathbb C$.

[F1] Under Countable Choice, every bounded real-linear functional on real $L^p$ over an arbitrary measure space is uniquely integration against a real $L^q$ density, with equality of norms ([[thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity]]).

[F2] Complex $L^p$ is the a.e. quotient of measurable finite-valued complex functions with finite $p$-norm; real and imaginary parts, conjugation, products, and positive powers have the stated measurability conventions, and bilinear tests use $\int fs$ without conjugation ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F3] Complex Hölder makes the bilinear pairing bounded, and complex $L^p$ has the quotient norm with $\lVert\overline f\rVert_p=\lVert f\rVert_p$ ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F4] Countable Choice selects from every countable family of nonempty sets ([[def-countable-choice]]).

## Proof

**Proof technique:** represent the real and imaginary parts on the real-valued subspace, then use a normalized phase test for the norm and uniqueness.

1.1 Regard real $L^p(\mu)$ as the real-valued subspace of complex $L^p(\mu;\mathbb C)$.  The maps $A(u)=\operatorname{Re}\Lambda(u)$ and $B(u)=\operatorname{Im}\Lambda(u)$ are bounded real-linear functionals there, with $|A(u)|,|B(u)|\leq\lVert\Lambda\rVert\lVert u\rVert_p$.  Applying [F1] twice gives real $a,b\in L^q(\mu)$ such that $A(u)=\int ua$ and $B(u)=\int ub$ for every real $u\in L^p$.  Put $h=a+ib\in L^q(\mu;\mathbb C)$; component inequalities in [F3] make its $q$-norm finite. [F1, F2, F3, given]

2.1 For real-valued $u$, componentwise complex integration gives $\Lambda(u)=A(u)+iB(u)=\int u(a+ib)=\int uh$.  If $f=u+iv$ is an arbitrary complex $L^p$ class, [F3] puts its real and imaginary parts in real $L^p$, and complex linearity gives $\Lambda(f)=\Lambda(u)+i\Lambda(v)=\int uh+i\int vh=\int fh$.  All identities depend only on a.e. classes by the quotient and integration conventions in [F2]–[F3]. [F2, F3, step 1.1, algebra]

3.1 Hölder [F3] gives $|\int fh|\leq\lVert f\rVert_p\lVert h\rVert_q$, hence $\lVert\Lambda\rVert\leq\lVert h\rVert_q$.  If $h=0$ a.e., step 2.1 gives $\Lambda=0$ and equality follows.  Otherwise define $v=0$ on $\{h=0\}$ and $v=|h|^{q-2}\overline h$ where $h\ne0$.  Then $|v|=|h|^{q-1}$ and $vh=|h|^q$ pointwise.  Since $(q-1)p=q$, [F2]–[F3] give $v\in L^p$, $\lVert v\rVert_p=\lVert h\rVert_q^{q-1}$, and $\Lambda(v)=\int|h|^q=\lVert h\rVert_q^q$.  Testing on $v/\lVert v\rVert_p$ proves $\lVert\Lambda\rVert\geq\lVert h\rVert_q$, including the closed unit-norm endpoint. [F2, F3, step 2.1, algebra]

4.1 If $k\in L^q(\mu;\mathbb C)$ gives the same pairing functional, put $d=h-k$.  Then $\int fd=0$ for every $f\in L^p$.  If $d$ were nonzero, the phase test of step 3.1 with $d$ in place of $h$ would produce $v\in L^p$ with $\int vd=\lVert d\rVert_q^q>0$, a contradiction.  Thus $d=0$ in $L^q$, so the density is unique. [F2, F3, step 3.1, discharge-contradiction]

5.1 Steps 2.1–4.1 prove existence, equality of norms, and uniqueness.  Countable Choice is used only inside the real arbitrary-measure representation [F1], whose construction makes countably many local choices; applying that theorem to $A$ and $B$ requires only two instances and no stronger choice principle.  The empty and zero-measure spaces have only zero $L^p$ classes and are covered by the $h=0$ branch of step 3.1; the forbidden endpoints $p=1,\infty$ never enter because $1<p,q<\infty$. [F1, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

The absence of a conjugate in the displayed pairing is deliberate.  It is why
the phase test contains $\overline h$: multiplication then gives the
nonnegative real function $|h|^q$.
