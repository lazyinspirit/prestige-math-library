---
id: ex-blocks-and-defect-groups-of-s3
kind: example
title: Blocks and defect groups of s3
deps: [prop-principal-block-has-sylow-defect, thm-defect-zero-blocks-are-simple-algebras, thm-defect-groups-are-maximal-brauer-support]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Example

For a splitting field $k$ and $G=S_3$, put $a=(123)$. In characteristic $2$ the two blocks are $e=1+a+a^2$ and $f=a+a^2$, with defect groups respectively the Sylow $C_2$ subgroups and $1$, and $fkG\cong M_2(k)$. In characteristic $3$ there is just one block, with Sylow defect $C_3$.

## Facts & Assumptions

**Given:** The group, splitting field and primes stated above.

[F1] The block containing the trivial module has Sylow defect. ([[prop-principal-block-has-sylow-defect]])

[F2] Over a splitting field defect-zero blocks are matrix algebras, and conversely. ([[thm-defect-zero-blocks-are-simple-algebras]])

[F3] Defect groups are maximal nonzero Brauer-support subgroups. ([[thm-defect-groups-are-maximal-brauer-support]])

## Verification

**Proof technique:** direct.

1.1 In characteristic $2$, put $f=a+a^2$ and $e=1+f$. Since $a^3=1$, one has $f^2=a^2+a=f$ and $e^2=e$, with $ef=0$ and $e+f=1$. A transposition $t$ conjugates $a$ to $a^{-1}$, so both idempotents are central. Also $ae=e$, and $ekG$ has basis $e,et$, with $(et)^2=e$. Thus it is $kC_2\cong k[u]/((u-1)^2)$. An element is a unit exactly when its constant term in $u-1$ is nonzero, by a two-term geometric inverse. This local algebra has no nontrivial idempotent, so $e$ is primitive central. [given]

2.1 Define matrices $A=\begin{pmatrix}0&1\\1&1\end{pmatrix}$ and $T=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ over $k$. Direct multiplication gives $A^3=T^2=I$ and $TAT=A^{-1}$. These are the relations of $S_3=\langle a,t\mid a^3=t^2=1,\ tat=a^{-1}\rangle$: the relations reduce every word to one of $a^i t^j$ with $0\le i<3$, $0\le j<2$, and the actual permutations give six distinct forms. Hence $a\mapsto A,t\mapsto T$ defines a representation and its linear extension $\rho:kG\to M_2(k)$ is an algebra map. One has $\rho(f)=A+A^2=I$. The four matrices $I,A,T,AT$ span $M_2(k)$: the standard matrix units are $E_{22}=A+T$, $E_{11}=I+A+T$, $E_{21}=AT+I$, and $E_{12}=T+AT+I$. They are the images of $f,fa,ft,fat$. These four group-algebra elements form a basis of $fkG$, since $f,fa$ are independent in $fk\langle a\rangle$, span that ideal by $fa^2=f+fa$, and the two cosets of $\langle a\rangle$ have disjoint supports. Thus the restriction of $\rho$ is a surjective map between four-dimensional algebras, hence an isomorphism $fkG\cong M_2(k)$. Its centre is $kf$, so $f$ is primitive and $e,f$ are all blocks. The augmentation of $e$ is $3=1$, so $e$ acts as identity on the trivial module and is principal. This calculation uses no root of unity in $k$. [step 1.1]

3.1 For $P=\langle t\rangle$, direct commutation in $S_3$ gives $C_G(P)=P$. Neither $a$ nor $a^2$ centralizes $t$, hence $\operatorname{Br}_P(e)=1$ and $\operatorname{Br}_P(f)=0$. All nontrivial $2$-subgroups are transposition subgroups. At $1$, the image of $f$ is $f\ne0$. Thus [F3] gives Sylow defect for $e$ and defect $1$ for $f$, agreeing with [F1] for the principal block and [F2] for the explicitly computed matrix block. [F1, F2, F3, step 2.1]

4.1 In characteristic $3$, let $T$ be the sum of the three transpositions and $C=a+a^2$. The centre has basis $1,T,C$, because commuting with all group elements is equivalent to having constant coefficients on conjugacy classes. Direct multiplication gives $T^2=3(1+C)=0$, $C^2=C+2$, and $TC=2T$. Thus $J=kT+k(1+C)$ satisfies $J^2=0$, and the centre is $k1\oplus J$. For $z=\lambda1+u$ with $u\in J$, the equation $z^2=z$ is $\lambda^2=\lambda$ and $(2\lambda-1)u=0$. The first equation gives $\lambda=0$ or $1$; in both cases $2\lambda-1\ne0$ in characteristic $3$, so $u=0$. Therefore the only central idempotents are $0,1$. There is one block, necessarily principal; [F1] gives defect $\langle a\rangle\cong C_3$. [F1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
