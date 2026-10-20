---
id: thm-node-mean-minimizes-squared-error
kind: theorem
title: "The sample mean uniquely minimizes squared error on a nonempty leaf"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
dependency_level: 1
deps:
  - def-empirical-decision-tree
  - prop-standard-coordinate-inner-products
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-least-squares-solutions-and-normal-equation
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., §9.2.2'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
    - title: 'MIT OpenCourseWare, 15.097, Lecture 8: Decision trees, slide 15'
      url: 'https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Statement

Let $I$ be a nonempty finite set of sample indices and let $y_i\in\mathbb R$ for every $i\in I$. Put $N=|I|$ and $\bar y_I=N^{-1}\sum_{i\in I}y_i$. Among all constants $c\in\mathbb R$, the unique minimizer of $\sum_{i\in I}(y_i-c)^2$ is $c=\bar y_I$, and the minimum value is $\sum_{i\in I}(y_i-\bar y_I)^2$.

## Statement references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §9.2.2, equations (9.10)–(9.14), printed p. 307](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[MIT OpenCourseWare, 15.097, Lecture 8: Decision trees, slide 15](https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf)

## Facts & Assumptions

**Given:** A nonempty finite sample-index set $I$ and real responses $(y_i)_{i\in I}$.

[F1] [[def-empirical-decision-tree]]: A regression leaf with sample set $I$ has $N_I=|I|\ge1$, mean $\bar y_I=N_I^{-1}\sum_{i\in I}y_i$, and squared-error impurity $Q_I=N_I^{-1}\sum_{i\in I}(y_i-\bar y_I)^2$.

[F2] [[prop-standard-coordinate-inner-products]]: For every $n$, the standard coordinate dot product on $\mathbb R^n$ is an inner product; in particular, identifying $\mathbb R$ with $\mathbb R^1$ supplies the standard inner products on both $\mathbb R$ and $\mathbb R^N$.

[F3] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: An adjoint satisfies $\langle T a,v\rangle=\langle a,T^*v\rangle$ for every $a$ and $v$.

[F4] [[thm-least-squares-solutions-and-normal-equation]]: For a linear map between finite-dimensional inner-product spaces, $T^*(Tc-b)=0$ characterizes minimizers of $\lVert Tc-b\rVert$; minimizers exist.

## Proof

1.1 Enumerate $I$ in increasing sample-index order as $i_1,\ldots,i_N$ and define $T(c)=(c,\ldots,c)$ and $b=(y_{i_1},\ldots,y_{i_N})$. For all scalars $a,c,d\in\mathbb R$, $T(ac+d)=aT(c)+T(d)$ coordinatewise, so $T$ is linear. [given, construct, algebra]

2.1 Identify $\mathbb R$ with $\mathbb R^1$. By [F2] for $n=1$ and $n=N$, the standard coordinate inner products make $\mathbb R$ and $\mathbb R^N$ finite-dimensional inner-product spaces. Hence $\lVert Tc-b\rVert^2=\sum_{i\in I}(y_i-c)^2$. [F2, step 1.1, algebra]

3.1 Define $S:\mathbb R^N\to\mathbb R$ by $S(v_1,\ldots,v_N)=\sum_{k=1}^Nv_k$. This map is linear, and for every $c\in\mathbb R$ and $v\in\mathbb R^N$, $\langle T(c),v\rangle_{\mathbb R^N}=c\sum_{k=1}^Nv_k=\langle c,S(v)\rangle_{\mathbb R}$. Thus $S$ is an adjoint of $T$ by [F3]. If another map also satisfied this identity, its value at each $v$ would differ from $S(v)$ by a scalar pairing to zero with every $c\in\mathbb R$, hence would equal $S(v)$ by positive definiteness. Therefore $T^*=S$. [F2, F3, step 1.1, step 2.1, algebra, construct]

4.1 Now [F4] applies to the linear map $T$ between these finite-dimensional inner-product spaces, with its adjoint established in step 3.1. The normal equation $T^*(Tc-b)=0$ is $Nc-\sum_{i\in I}y_i=0$, whose unique solution is $c=\bar y_I$ because $N\ge1$. By [F4], this solution is the unique minimizer. [F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 Expanding around $\bar y_I$ gives $\sum_{i\in I}(y_i-c)^2=\sum_{i\in I}(y_i-\bar y_I)^2+N(c-\bar y_I)^2$, since $\sum_{i\in I}(y_i-\bar y_I)=0$. Therefore the minimum value is $\sum_{i\in I}(y_i-\bar y_I)^2$. [given, step 4.1, algebra] ∎
