---
name: numerical-differential-equations-and-stochastic-dynamics
title: Numerical Differential Equations and Stochastic Dynamics
status: published
---

This collection studies the numerical evolution of deterministic and stochastic systems. It connects local consistency, stability and global error with practical time integration, boundary-value solvers, constrained dynamics and stochastic simulation. Euler–Maruyama construction and convergence provide the starting point for stochastic differential equations, alongside Milstein methods, adaptive Brownian coupling and schemes for superlinear drift. Deterministic topics include Runge–Kutta and multistep methods, stiff and implicit integration, splitting, geometric integration and event location. Population balances, jump processes and finite-state evolution supply further applications.

Each method specifies its input class, arithmetic or random-draw model, regularity, time horizon and error claim. Exact-arithmetic identities remain separate from finite-precision stability; continuous well-posedness remains separate from discrete convergence; estimator values remain separate from certified error; and sampling variability remains separate from solver, approximation and model bias. Existing analysis and probability results supply their established hypotheses. A small residual or an observed rate does not establish convergence without the matching argument.

Executable methods state finite budgets, stopping rules and failure statuses. Termination and computational cost are distinct from convergence and accuracy. Geometric integration retains the domain of every intermediate drift or kick, while stochastic error bounds retain their filtration, moment and coefficient assumptions. Mathematical designs motivated by physics remain separate from the physical modeling assumptions of their applications.
