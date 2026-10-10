---
id: lem-lorentz-form-has-orthonormal-basis
kind: lemma
title: "Every Lorentz form admits an ordered basis with matrix diag(-1,1,1,1)"
status: draft
origin: session
domain: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-lorentz-form-and-inertia, thm-sylvesters-law-of-inertia]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  thm-sylvesters-law-of-inertia: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "K. Conrad, Bilinear Forms (orthogonality, radicals, inertia)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $\eta$ be a Lorentz form on a $4$-dimensional real vector space $V$. There
is an ordered basis $(e_0,e_1,e_2,e_3)$ of $V$ with
$\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ for all $a,b$. Such a basis
is called **$\eta$-orthonormal**; in every $\eta$-orthonormal ordered basis
exactly one basis vector is timelike and the other three are spacelike, and the
count is the inertia $(3,1,0)$ of $\eta$.

## Facts & Assumptions

**Given:** A $4$-dimensional real vector space $V$ and a Lorentz form $\eta$ on $V$.

[L1] Every symmetric bilinear form on a finite-dimensional real vector space is
congruent to exactly one normal form $\operatorname{diag}(I_p,-I_q,0_r)$ with
$p+q+r=\dim V$, and the numbers of positive, negative, and zero diagonal entries
are independent of the diagonalizing basis ([[thm-sylvesters-law-of-inertia]]).

[L2] $\eta$ is a symmetric bilinear form on $V$, and in some basis in which its
matrix is diagonal there are exactly three positive diagonal entries, exactly
one negative diagonal entry, and no zero diagonal entry; this triple is the
inertia $(3,1,0)$ of $\eta$, independent of the diagonalizing basis
([[def-lorentz-form-and-inertia]]).

## Proof

1.1 By [L1] the symmetric bilinear form $\eta$ on the finite-dimensional real space $V$ is congruent to exactly one normal form $\operatorname{diag}(I_p,-I_q,0_r)$ with $p+q+r=\dim V=4$, and by [L2] its inertia is $(3,1,0)$; hence $(p,q,r)=(3,1,0)$ and there is a basis $v_0,v_1,v_2,v_3$ of $V$ with $\eta(v_i,v_j)=\operatorname{diag}(1,1,1,-1)_{ij}$ for all $i,j$. [L1, L2, choose]

2.1 Define the reordering $e_0:=v_3$ and $e_1:=v_0$, $e_2:=v_1$, $e_3:=v_2$. Then $(e_0,e_1,e_2,e_3)$ is an ordered basis of $V$, and evaluating the displayed matrix gives $\eta(e_0,e_0)=-1$, $\eta(e_1,e_1)=\eta(e_2,e_2)=\eta(e_3,e_3)=+1$ and $\eta(e_a,e_b)=0$ for $a\neq b$, that is, $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$: the required ordered basis exists. [step 1.1, algebra]

3.1 Now let $(f_0,f_1,f_2,f_3)$ be any ordered basis with $\eta(f_a,f_b)=\operatorname{diag}(-1,1,1,1)_{ab}$. Its matrix is diagonal with diagonal entries $-1,1,1,1$, so in this diagonalizing basis the numbers of positive, negative and zero diagonal entries are $(3,1,0)$; by the uniqueness clause of [L1] the triple $(3,1,0)$ is intrinsic and equals the inertia of $\eta$ given in [L2]. In such a basis exactly one vector, $f_0$, is timelike, because $\eta(f_0,f_0)=-1<0$, and the remaining three are spacelike, because $\eta(f_i,f_i)=+1>0$ for $i=1,2,3$; and this count is exactly the inertia $(3,1,0)$. [step 2.1, L1, L2, algebra] ∎
