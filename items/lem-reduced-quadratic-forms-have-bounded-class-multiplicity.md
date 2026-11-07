---
dependency_level: 7
id: lem-reduced-quadratic-forms-have-bounded-class-multiplicity
kind: lemma
title: Uniform reduced-form counts in a quadratic proper class
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
deps:
- lem-quadratic-discriminant-character-and-class-number-normalization
- def-binary-quadratic-form-over-integers
- def-discriminant-of-binary-quadratic-form
- def-proper-equivalence-of-binary-quadratic-forms
- def-regular-continued-fraction
- def-continued-fraction-complete-quotients
- lem-continued-fraction-convergent-recurrence
- lem-continued-fraction-determinant-identity
- thm-rational-continued-fraction-termination
- thm-normalized-finite-continued-fraction-uniqueness
- thm-division-algorithm-in-z
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- thm-monotonicity-of-the-integral
- def-axiom-of-choice
- def-countable-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-dependent-choice
justified_by: []
axiom_use: AC+CC through the normalization lemma. CF calculations, finite minimum-vector
  counts and matrix selections add only finite choices.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: W. Haneke, Über die reellen Nullstellen der Dirichletschen L-Reihen
    url: https://www.impan.pl/shop/publication/transaction/download/product/98676?download.pdf
    locator: Acta Arithmetica22(1973),391–421, complete scanned article visually read.
      Arithmetic reduced-form counts and positive Mellin/Euler estimates reconstructed
      locally; no theorem imported.
  - title: W. Haneke, Corrigendum
    url: https://www.impan.pl/shop/publication/transaction/download/product/101046?download.pdf
    locator: Acta Arithmetica31(1976),99–100, full two-page correction visually read;
      the ramified-prime reciprocal sum is retained.
---

## Statement

Assume AC and Countable Choice. For the quadratic data $d,h,h_+,\epsilon,H$ of the normalization lemma, let $\mathcal R_d^-$, for $d<0$, consist of primitive integer triples $(a,b,c)$ with $b^2-4ac=d$, $a>0$ and $|b|\le a\le c$. For $d>0$ let $\mathcal R_d^+$ consist of integer triples of discriminant $d$ with
$$0<\sqrt d-b<2|a|<\sqrt d+b.$$
Every proper $\mathrm{SL}_2(\mathbb Z)$ class contains at most $16$ members of $\mathcal R_d^-$, or at most $16\log\epsilon$ members of $\mathcal R_d^+$, respectively. Thus $|\mathcal R_d^-|\le16h$ and $|\mathcal R_d^+|\le16h_+\log\epsilon$; in either signature the full indicated reduced set has cardinality at most $32H$. For positive $d$, the Gauss map on the associated states $x>1$, $-1<x'<0$ is a finite permutation, and the period of a state in a fixed proper class is at most $8\log\epsilon$. The full integer-ring totally positive unit is meant.

## Facts & Assumptions

**Given:** The data and AC+CC hypotheses in the Statement.

[F1] The preceding normalization provides the exact form class counts, $h<2H$ in the imaginary case and $h_+\log\epsilon=H$ in the real case, with $\epsilon=(t+u\sqrt d)/2>2$ of norm one in the full integer ring. [[lem-quadratic-discriminant-character-and-class-number-normalization]]

[F2] Integral form discriminants and proper equivalence use determinant-one integer substitutions. Regular continued fractions, complete quotients, their convergent recurrence and determinant identity have the finite Euclidean termination and normalized finite uniqueness properties. [[def-binary-quadratic-form-over-integers]] [[def-discriminant-of-binary-quadratic-form]] [[def-proper-equivalence-of-binary-quadratic-forms]] [[def-regular-continued-fraction]] [[def-continued-fraction-complete-quotients]] [[lem-continued-fraction-convergent-recurrence]] [[lem-continued-fraction-determinant-identity]] [[thm-rational-continued-fraction-termination]] [[thm-normalized-finite-continued-fraction-uniqueness]] [[thm-division-algorithm-in-z]]

[F3] Logarithms obey their product laws and integral representation; in particular $\log2\ge1/2$. [[thm-natural-logarithm-laws]] [[thm-logarithm-derivative-and-integral]] [[thm-monotonicity-of-the-integral]]

[A1] Full AC and CC are retained at the literal local supplier interfaces. AC implies DC and hence covers inherited DC requirements; no necessity or choice-free refinement is asserted. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The stated data.

1.1 If $|b|\le a\le c$, the least nonzero lattice value of $F(u,v)=au^2+buv+cv^2$ is $a$. Indeed, completing the square gives $F(u,v)\ge3av^2/4\ge3a$ for $|v|\ge2$; for $|v|=1,|u|\ge2$, $F(u,v)\ge a(u^2-|u|+1)\ge3a$; the remaining pairs give at least $a$. Every vector attaining $a$ therefore lies in $\{-1,0,1\}^2\setminus\{0\}$, giving at most eight. Equivalent reduced forms have the same invariant minimum and hence the same first coefficient. For a fixed primitive first column giving that minimum, all determinant-one second columns differ by an integer multiple of the first; their middle coefficient changes by $2aj$. The interval $[-a,a]$ admits at most two choices. The discriminant fixes the last coefficient. Thus each proper class has at most sixteen reduced forms, and [F1] gives $|\mathcal R_d^-|\le16h<32H$, including weak boundary equalities. [F1, F2, A1, given, algebra]

1.2 Suppose $d>0$. Reducedness implies $0<b<\sqrt d$, $|a|<\sqrt d$ and $ac<0$, so the indicated integer triples form a finite set. Every such form is primitive: a common odd prime would have its square divide the fundamental discriminant, while a common factor two would give $d/4\equiv0,1\pmod4$ rather than the fundamental even possibilities $2,3\pmod4$. Its distinguished root $w=(-b-\sqrt d)/(2a)$ gives $x=|w|>1$ and conjugate $x'\in(-1,0)$. A quadratic irrational determines its primitive integer polynomial up to sign. With fixed positive middle coefficient $b$, at most two reduced forms give the same $x$, namely $(a,b,c)$ and $(-a,b,-c)$. If $a_0=\lfloor x\rfloor$, then $T(x)=1/(x-a_0)>1$ and $T(x)'=1/(x'-a_0)\in(-1,0)$, again a state of discriminant $d$. Its predecessor is unique because $a_0=\lfloor-1/T(x)'\rfloor$. Hence $T$ is a permutation of the finite state set and every state is purely periodic. [F1, F2, given, construct, algebra]

2.1 Two real irrational numbers related by an integral unimodular fractional-linear map have a common eventual regular continued-fraction tail. Here is the elementary generator argument needed for this assertion. Translation changes only the initial integer; inversion of a positive number inserts or removes an initial zero. For $x=a+1/x_1$, negation is handled by $-x=-a-1+1/(1+1/(x_1-1))$. If $x_1=[a_1;a_2,\ldots]$ and $a_1\ge2$, its new digits are $[-a-1;1,a_1-1,a_2,\ldots]$; if $a_1=1$, they are $[-a-1;a_2+1,a_3,\ldots]$. Both identities follow by direct fraction simplification and retain the infinite tail. A negative inversion is a positive inversion between two negations. Finally Euclidean row reduction expresses every matrix in $\mathrm{GL}_2(\mathbb Z)$ in these translations, inversion and negation, using division [F2]; thus the claim follows by finite composition. For a proper substitution $\left(\begin{smallmatrix}\alpha&\beta\\\gamma&\delta\end{smallmatrix}\right)$ the two roots transform by $r\mapsto(\delta r-\beta)/(\alpha-\gamma r)$. Their difference becomes $-\sqrt d/a_{\rm new}$, since $a_{\rm new}=a(\alpha-\gamma r_1)(\alpha-\gamma r_2)$ and the determinant is one. Thus the distinguished branch is preserved, rather than exchanged with the conjugate. Taking its absolute value adds only negation. Consequently states of properly equivalent reduced forms have a common tail and, being purely periodic, are in a single periodic orbit. A class therefore contains at most twice that orbit's length. [F2, step 1.2, construct, algebra]

3.1 A proper class containing a reduced form contains one with $a<0$. Indeed put $A=\operatorname{sgn}(w)\lfloor|w|\rfloor$ and substitute the determinant-one matrix $\left(\begin{smallmatrix}A&-1\\1&0\end{smallmatrix}\right)$. Its distinguished root is $-1/(w-A)$, whose absolute value is $T(x)$ and whose conjugate has the required opposite sign and modulus below one. The new last coefficient is $a$ and the new first and last coefficients have opposite signs. The root inequalities imply a positive middle coefficient, so this is again reduced and reverses the sign of the first coefficient. Starting, if necessary, after this step, write $a<0,c>0$. Put $u=-u_0$ where $\epsilon=(t+u_0\sqrt d)/2$ is the unit from [F1]. Then $$M=\begin{pmatrix}(t-bu)/2&-cu\\au&(t+bu)/2\end{pmatrix}$$ is integral, has determinant one, fixes the distinguished positive root, and preserves the form. These follow by expanding $t^2-du^2=4$ and $b^2-4ac=d$; the integer-ring parity makes its diagonal entries integral. Its entries are positive: $t>|bu|$ and $u<0$. Moreover $\gamma=au>0$, $\delta=(t+bu)/2>0$ satisfy $\gamma\ge\delta$. Indeed $b+2|a|>\sqrt d$ and $(b+2|a|)^2-d=4|a|(b+|a|-c)$ is a positive integer at least four, whence $(b+2|a|)^2u_0^2\ge du_0^2+4=t^2$. Finally $\gamma=|a|u_0<\sqrt d\,u_0=\epsilon-\epsilon^{-1}<\epsilon$. [F1, F2, step 1.2, step 2.1, construct, algebra]

4.1 The positive coprime integers $\gamma\ge\delta$ admit a finite fraction $\gamma/\delta=[a_1;\ldots,a_N]$ with all digits at least one and odd $N$: split the final digit $b\ge2$ into $b-1,1$ if required; the fraction one has the expansion $[1]$. For $C(v)=\left(\begin{smallmatrix}v&1\\1&0\end{smallmatrix}\right)$, the REVERSED product $B=C(a_N)\cdots C(a_1)$ has top row $(\gamma,\delta)$ and determinant minus one, by the recurrence and transpose in [F2]. Write its bottom row $(r,s)$. Since $\det M=1$ and $\det B=-1$, subtracting the determinant equations yields $(\alpha,\beta)=(r,s)+a_0(\gamma,\delta)$ for an integer $a_0$, so $M=C(a_0)B$. Since $Bx>1$ and $Mx=x>1$, $x=a_0+1/(Bx)$ forces $a_0=\lfloor x\rfloor\ge1$. These matrices therefore give an actual return of its regular continued fraction after $N+1$ steps, with digit order $a_0,a_N,\ldots,a_1$. The numerator recurrence, every digit being at least one, gives $\gamma\ge2^{(N-1)/2}$ (each two steps at least double). Hence its period $r_0$ satisfies $r_0\le N+1\le2\log\epsilon/\log2+2\le8\log\epsilon$ by [F3] and $\epsilon>2$. Combining with step 2.1 bounds the forms in a proper class by $16\log\epsilon$. Summing over at most $h_+$ classes and using [F1] gives $|\mathcal R_d^+|\le16H\le32H$. No existence of a reduced representative in an arbitrary class was needed. [F1, F2, F3, step 2.1, step 3.1, choose, algebra] ∎
